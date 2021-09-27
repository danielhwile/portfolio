import '../static/sidebar.css'
import logo from '../static/logo.png'
const Sidebar = () => {
    return (
        <>
        
        <div className="logoHolder">
            <div className="logoCircle">
                <img src={logo} width='60' height='60' id="logo"/>
            </div>
        </div>
        <nav className="navigation">
            <ul>
                <li className="navItem" id="aboutMeNav">
                    <a>
                        <div className="coverNavText rotate">
                            About Me
                        </div>
                    </a>
                </li>
                <li className="navItem">
                    <a>
                        <div className="coverNavText rotate">
                            Experience
                        </div>
                    </a>
                </li>
                <li className="navItem">
                    <a>
                        <div className="coverNavText opprotate">
                            Projects
                        </div>
                    </a>
                </li>
                <li className="navItem">
                    <a>
                        <div className="coverNavText opprotate">
                            Contact Me
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Sidebar
