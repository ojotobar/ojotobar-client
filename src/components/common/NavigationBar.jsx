import { Link } from "react-router-dom";
import { FaAddressBook, FaBriefcase, FaHome, FaUser } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <nav className="navbar">
        <Link to='/' className="centered">
           {/* <FaHome color="crimson" size={25}/> */}
          <div className="icon">  {/* using simple css */}
            <FaHome size={25}/>
          </div>
          <span className="px-3">home</span>
        </Link>
        <Link to='about' className="centered">
          <div className="icon">
            <FaUser size={25}/> 
          </div>
          <span className="px-3">about</span>
        </Link>
        <Link to='portfolio' className="centered">
          <div className="icon"> 
            <FaBriefcase size={25}/> 
          </div>
          <span className="px-3">portfolio</span>
        </Link>
        <Link to='contact' className="centered">
          <div className="icon">
           <FaAddressBook size={25}/> 
          </div>
          <span className="px-3">contact</span>
        </Link>
    </nav>
  )
}

export default NavigationBar