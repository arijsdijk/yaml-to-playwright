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
    <div className="converter">
      <div className="input-section">
        <h2>YAML Input</h2>
        <textarea
          value={yamlInput}
          onChange={(e) => setYamlInput(e.target.value)}
          placeholder="Paste your YAML here..."
          rows={20}
          cols={50}
        />
        <button onClick={handleConvert}>Convert to Playwright</button>
      </div>

      <div className="output-section">
        <h2>Playwright Code</h2>
        <pre>{playwrightCode}</pre>
        <button onClick={handleCopy} disabled={!playwrightCode}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default YamlConverter;