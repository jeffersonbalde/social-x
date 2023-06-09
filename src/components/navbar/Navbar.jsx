import { useState } from 'react'
import './Navbar.css'
import { SiAnaconda } from 'react-icons/si'
import{ BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(currenState => !currenState)
  }

  return (
    <nav className="container navbar">
      <div className="logo">
        <SiAnaconda color="#fff" size={33}/>
        <p className="logo-text">
          Social<span>X</span>
        </p>
      </div>
      <menu>
        <ul className='nav-links' id={showMenu ? 'nav-links-mobile' : 'nav-links-mobile-hide'}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Subscribe</a></li>
          <li className='nav-btn'>
            <a 
            href="#"
            className='btn btn-dark'
            >Get Started
          </a></li>
        </ul>
      </menu>

      <div className="menu-icons" onClick={toggleMenu}>
        {
          showMenu ? <AiOutlineClose color="#fff" size={29}/>
                    : <BiMenuAltRight color="#fff" size={33}/>
        }
      </div>
    </nav>
  )
}

export default Navbar