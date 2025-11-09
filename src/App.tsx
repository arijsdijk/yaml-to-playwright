import YamlConverter from './components/YamlConverter'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold text-primary dark:text-primary-dark text-center mb-8">
          Power Apps YAML to Playwright locator converter
        </h1>
        <YamlConverter />
        <ThemeToggle />
      </div>
    </div>
  )
}

export default App
