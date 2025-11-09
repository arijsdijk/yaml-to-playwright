import { useState } from 'react';
import { convertYamlToPlaywright } from '../utils/yamlToPlaywright';

const YamlConverter = () => {
  const [yamlInput, setYamlInput] = useState('');
  const [playwrightCode, setPlaywrightCode] = useState('');

  const handleConvert = () => {
    const converted = convertYamlToPlaywright(yamlInput);
    setPlaywrightCode(converted);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(playwrightCode);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200">YAML Input</h2>
        <textarea
          value={yamlInput}
          onChange={(e) => setYamlInput(e.target.value)}
          placeholder="Paste your YAML here..."
          className="w-full h-[400px] p-4 font-mono text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-primary dark:focus:border-primary-dark focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark text-gray-900 dark:text-gray-100 transition-colors"
        />
        <button
          onClick={handleConvert}
          className="w-full bg-primary dark:bg-primary-dark hover:bg-primary-hover dark:hover:bg-primary-dark-hover text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out shadow-sm"
        >
          Convert to Playwright
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200">Playwright Code</h2>
        <pre className="w-full h-[400px] p-4 font-mono text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm overflow-auto text-gray-900 dark:text-gray-100 transition-colors">
          {playwrightCode}
        </pre>
        <button
          onClick={handleCopy}
          disabled={!playwrightCode}
          className="w-full bg-primary dark:bg-primary-dark hover:bg-primary-hover dark:hover:bg-primary-dark-hover text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out shadow-sm disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default YamlConverter;