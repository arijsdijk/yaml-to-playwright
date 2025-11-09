import { load } from 'js-yaml';
import type { YamlStructure } from '../types/yaml';

export const convertYamlToPlaywright = (yamlContent: string): string => {
  try {
    const parsed = load(yamlContent) as YamlStructure;
    let playwrightCode = '';

    Object.values(parsed.Screens).forEach((screen) => {
      screen.Children.forEach((child) => {
        const [elementName] = Object.keys(child);
        const element = child[elementName];
        
        // Check for visibility property
        if ('Properties' in element && 'Visible' in element.Properties) {
          const isVisible = String(element.Properties.Visible).toLowerCase() !== '=false';
          playwrightCode += `await expect(page.locator('[data-control-name="${elementName}"]')).${isVisible ? 'toBeVisible' : 'toBeHidden'}();\n`;
        } else {
          // Default to click action if no visibility property is specified
          playwrightCode += `await page.locator('[data-control-name="${elementName}"]').click();\n`;
        }
      });
    });

    return playwrightCode;
  } catch (error) {
    console.error('Error parsing YAML:', error);
    return '// Error parsing YAML. Please check your input.';
  }
}