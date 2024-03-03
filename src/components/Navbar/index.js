
import { FaRegMoon , FaRegBell, FaLanguage} from "react-icons/fa"
import './index.css'

const Navbar=()=>{
    return(
      <>
        <nav className="nav">
          <img src="https://cdn6.f-cdn.com/contestentries/138969/13901059/54b67fa240afc_thumb900.jpg" className="logo"/>
          <ul className="navUl">
            <li className="li-f">BID</li>
            <li className="li">POD</li>
            <li className="li">VENDOR</li>
            <li className="li">USER</li>
            <li className="li">Fright EG</li>
          </ul>
        </nav>
      </>
    )
}


export default Navbar

