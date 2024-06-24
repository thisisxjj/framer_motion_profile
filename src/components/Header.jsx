import React from "react"
import { Link } from "react-scroll"
import Logo from "../assets/logo.svg"

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="#">
            <img src={Logo} />
          </Link>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </div>
  )
}

export default Header
