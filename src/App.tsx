import BgAnimation from './components/intro/BgAnimation'
import Intro from './components/intro/Intro'
import Topbar from './components/Topbar/Topbar'

function App() {

  return (
    <div className='px-6'>
      <Topbar/>
      <BgAnimation/>
      <Intro/>
    </div>
  )
}

export default App
