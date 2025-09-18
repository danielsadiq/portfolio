import { createContext, useState, type Dispatch, type SetStateAction } from "react"

interface ThemeContextType {
  lightTheme: boolean
  setLightTheme: Dispatch<SetStateAction<boolean>>
}
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>({
  lightTheme:true,
  setLightTheme: ()=>{},

})
function ThemeProvider({children}: {children: React.ReactNode}) {
  const [lightTheme, setLightTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{lightTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
