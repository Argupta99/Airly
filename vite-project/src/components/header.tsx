import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-provider";
import { Moon, Sun } from "lucide-react";


const Header = () => {

    const {theme, setTheme} = useTheme();
    const isDark = theme === "dark";
    //to toggle between dark and light mode
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
       <Link to={"/"}>
       <img src={isDark ? "/dark_logo.jpg" : "/light_logo.jpg"} className="h-16"/>
       </Link>
       

       <div>
        <div onClick={() => setTheme(isDark ? "light" : "dark")}
         className={`flex items-center cursor-pointer transition-transform duration-500
         ${isDark? "rotate-180" : "rotate-0"}`
         }>
            
            {isDark ? <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" /> : <Moon className="h-6 w-6 text-blue-400 rotate-0 transition-all" />}</div>
       </div>
       </div>
    </header>
  )
}

export default Header;