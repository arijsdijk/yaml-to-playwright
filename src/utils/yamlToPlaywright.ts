import { load } from 'js-yaml';
import type { YamlStructure } from '../types/yaml';

export const convertYamlToPlaywright = (yamlContent: string): string => {
  try {
    const parsed = load(yamlContent) as YamlStructure;
    let playwrightCode = '';

    Object.values(parsed.Screens).forEach((screen) => {
      screen.Children.forEach((child) => {
        const [elementName] = Object.keys(child);
        playwrightCode += `await page.locator('[data-control-name="${elementName}"]').toBeVisible();\n`;
      });
    });

    return playwrightCode;
  } catch (error) {
    console.error('Error parsing YAML:', error);
    return '// Error parsing YAML. Please check your input.';
  }
}