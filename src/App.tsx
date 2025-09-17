import { useState } from 'react'
import BgAnimation from './components/intro/BgAnimation'
import Intro from './components/intro/Intro'
import Topbar from './components/Topbar/Topbar'

function App() {
  const [lightTheme, setLightTheme] = useState(true);
  return (
    <div className='px-6 dark:bg-purple-900 h-screen dark:text-white'>
      <Topbar lightTheme={lightTheme} setLightTheme = {setLightTheme}/>
      <BgAnimation/>
      <Intro/>
    </div>
  )
}

export default App
