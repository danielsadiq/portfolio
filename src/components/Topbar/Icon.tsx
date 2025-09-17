import type React from "react"

function Icon({children}: {children:React.ReactNode}) {
  return (
    <a target="_blank" rel="noreferrer" className="transition-colors cursor-pointer rounded-sm p-2 hover:bg-gray-300">
      {children}
    </a>
  )
}

export default Icon
