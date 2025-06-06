import whiteLogo from "../assets/logo/logo-white.png"
import blackLogo from "../assets/logo/logo-black.png"
import { Link } from "react-router"


function Logo({ color }: { color: "white" | "black" }) {
  return (
    <Link to={"/"}>
      <img src={color === "white" ? whiteLogo : blackLogo} alt="logo" className="h-16" />
    </Link>
  )
}

export default Logo