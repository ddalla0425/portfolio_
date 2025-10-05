import {List, XLg} from "react-bootstrap-icons";

function Header({ showNav, setShowNav }) {
    return (
        <header className={`${showNav ? "open" : ""}`}>
            {!showNav && (
                <button onClick={() => setShowNav(true)}><List size={24}/></button>
            )}
            {showNav && (
                <nav>
                    <button onClick={() => setShowNav(false)}><XLg size={24}/></button>
                    <ul>
                        <li><a href="#section_1">About Me</a></li>
                        <li><a href="#section_2">Skills</a></li>
                        <li><a href="#section_3">소리손순</a></li>
                        <li><a href="#section_4">티슈인맥</a></li>
                        <li><a href="#section_5">External Activities</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}


export default Header;