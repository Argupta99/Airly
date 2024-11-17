import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-provider";


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
        <div onClick={() => setTheme(isDark ? "light" : "dark")}>toggle</div>
       </div>
       </div>
    </header>
  )
}

export default Header;