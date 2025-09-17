import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Icon from "./Icon";
import Menu from "./Menu";
function Topbar() {
  const [active, setActive] = useState(false);
  return (
    <div className={`topbar${active ? " active": ""}`}>
      <div className="wrapper px-6 flex justify-between w-full">
        <div className="left flex items-center">
          <a href='#intro' className='logo'>Sadiq.</a>
          <Menu active={active} />
        </div>
        <div className="right flex">
            <nav className="flex items-center gap-x-4">
              {/* <a target="_blank" rel="noreferrer" className="transition-colors"><FaGithub /></a> */}
              <Icon><FaGithub/></Icon>
              <Icon><FaLinkedinIn /></Icon>
              <Icon><FaXTwitter /></Icon>
              <Icon><FaInstagram/></Icon>
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
