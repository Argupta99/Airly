import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
        <div>
       <Link to={"/"}>
       <img src="/dark_logo.jpg" className="h-16"/>
       </Link>
       </div>
    </header>
  )
}

export default Header;