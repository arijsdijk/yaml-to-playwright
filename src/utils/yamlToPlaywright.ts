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
        const locator = `page.locator('[data-control-name="${elementName}"]')`;
        
        // Add comment with element name
        playwrightCode += `\n// ${elementName}\n`;
        
        // Check if it's a Button control
        const isButton = element.Control?.startsWith('Button@');
        
        // Check for visibility property first
        if ('Properties' in element && 'Visible' in element.Properties) {
          const isVisible = String(element.Properties.Visible).toLowerCase() !== '=false';
          playwrightCode += `await expect(${locator}).${isVisible ? 'toBeVisible' : 'toBeHidden'}();\n`;
          
          // Add click action for visible buttons
          if (isButton && isVisible) {
            playwrightCode += `await ${locator}.click();\n`;
          }
        } else {
          // If no visibility property specified
          playwrightCode += `await expect(${locator}).toBeVisible();\n`;
          
          // Add click action for buttons
          if (isButton) {
            playwrightCode += `await ${locator}.click();\n`;
          }
        }
        
        // Add one line break between children
        if (child !== screen.Children[screen.Children.length - 1]) {
          playwrightCode += '\n';
        }
      });
    });

    return playwrightCode;
  } catch (error) {
    console.error('Error parsing YAML:', error);
    return '// Error parsing YAML. Please check your input.';
  }
}