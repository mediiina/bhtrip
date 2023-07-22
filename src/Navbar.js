import "./Navbar.css"


export default function Navbar() {
    return (
        <nav className="nav">
            <p className="topLeft">
                BH Trip
            </p>
            <div className="topCenter">
            <ul className="topList" >
                <li className="topListItem" >
                    <a href="/">
                        Home</a>
                </li>
                <li className="topListItem" >
                    <a href="/places-to-go">
                      Places to go</a>
                </li>
                <li className="topListItem" >
                    <a href="/plan-your-trip">
                      Plan your trip</a>
                </li>
            </ul>
            </div>
            <div className="topRight">
                <li className="topListItem" >
                    <a href="/authentication">Login/Sign In</a>
                </li>
            </div>
        </nav>
    )
}