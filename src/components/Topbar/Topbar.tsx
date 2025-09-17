import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Icon from "./Icon";
import Menu from "./Menu";
import { LuMoon, LuSun } from "react-icons/lu";
import "./topbar.css"
function Topbar({lightTheme, setLightTheme}: {lightTheme:boolean, setLightTheme: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [active, setActive] = useState(false);
  return (
    <div className={`topbar${active ? " active": ""} dark:bg-purple-900`}>
      <div className="wrapper flex justify-between w-full">
        <div className="left flex items-center">
          <a href='#intro' className='logo'>Sadiq.</a>
          <Menu active={active} />
        </div>
        <div className="right flex">
            <nav className="flex items-center gap-x-1 dark:bg-purple-900">
              <Icon><FaGithub/></Icon>
              <Icon><FaLinkedinIn /></Icon>
              <Icon><FaXTwitter /></Icon>
              <Icon><FaInstagram/></Icon>
              <button onClick={()=> setLightTheme(!lightTheme)}>
              <Icon custom={true}>
                {lightTheme ? <LuMoon/> : <LuSun/>}
              </Icon>
              </button>
                
              <div className="hamburger flex md:hidden" onClick={()=> setActive(!active)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </nav>

          </div>
      </div>
    </div>
  )
}

export default Topbar
