import { useContext, useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Icon from "./Icon";
import Menu from "./Menu";
import { LuMoon, LuSun } from "react-icons/lu";
import "./topbar.css"
import { ThemeContext } from "../../contexts/ThemeContext";

function Topbar() {
  const [active, setActive] = useState(false);
  const {lightTheme, setLightTheme} = useContext(ThemeContext);
  return (
    <div className={`topbar${active ? " active": ""} h-16`}>
      <div className="wrapper flex justify-between w-full">
        <div className="left flex items-center">
          <a href='#intro' className='logo'>Sadiq.</a>
          <Menu active={active} />
        </div>
        <div className="right flex">
            <nav className="flex items-center gap-x-1 bg-white dark:bg-black transition-colors duration-500">
              <Icon><FaGithub/></Icon>
              <Icon><FaLinkedinIn /></Icon>
              <Icon><FaXTwitter /></Icon>
              <Icon><FaInstagram/></Icon>
              <Icon onClick={()=>setLightTheme(!lightTheme)}>{lightTheme ? <LuMoon/> : <LuSun/>}</Icon>
                
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
