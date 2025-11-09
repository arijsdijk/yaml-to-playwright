import YamlConverter from './components/YamlConverter'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold text-primary text-center mb-8">
          Power Apps YAML to Playwright locator converter
        </h1>
        <YamlConverter />
      </div>
    </div>
  )
}

export default App
