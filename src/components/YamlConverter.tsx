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
        <h2 className="text-2xl font-medium text-gray-800">YAML Input</h2>
        <textarea
          value={yamlInput}
          onChange={(e) => setYamlInput(e.target.value)}
          placeholder="Paste your YAML here..."
          className="w-full h-[400px] p-4 font-mono text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <button
          onClick={handleConvert}
          className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out shadow-sm"
        >
          Convert to Playwright
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-medium text-gray-800">Playwright Code</h2>
        <pre className="w-full h-[400px] p-4 font-mono text-sm bg-white border border-gray-300 rounded-lg shadow-sm overflow-auto">
          {playwrightCode}
        </pre>
        <button
          onClick={handleCopy}
          disabled={!playwrightCode}
          className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default YamlConverter;