import type React from "react"
import { IconContext } from "react-icons"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Icon({children, custom}: {children:React.ReactNode, custom?:boolean}) {
  return (
    <IconContext.Provider value={{className: "dark:text-white"}}>
      <a target="_blank" rel="noreferrer" className="transition-colors cursor-pointer rounded-sm p-2">
        {children}
      </a>
    </IconContext.Provider>
  )
}

export default Icon
