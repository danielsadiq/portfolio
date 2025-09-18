import type React from "react"
import { IconContext } from "react-icons"

function Icon({children, onClick}: {children:React.ReactNode, onClick?:()=>void}) {
  if (onClick){
    return (
    <a target="_blank" rel="noreferrer" className="transition-colors cursor-pointer rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-900 duration-500" onClick={onClick}>
      <IconContext.Provider value={{className: "dark:text-white"}}>
        {children}
      </IconContext.Provider>
    </a>
  )
  }
  return (
    <a target="_blank" rel="noreferrer" className="transition-colors cursor-pointer rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-900 duration-500">
      <IconContext.Provider value={{className: "dark:text-white"}}>
        {children}
      </IconContext.Provider>
    </a>
  )
}

export default Icon
