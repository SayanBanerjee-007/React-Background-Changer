import { useState } from 'react'
import Navigation from './components/Navigation'

function App() {
  const [color, setColor] = useState('bg-black')
  return (
    <main className={`min-h-screen relative ${color}`}>
      <Navigation
        setColor={setColor}
        color={color}
      />
    </main>
  )
}

export default App
