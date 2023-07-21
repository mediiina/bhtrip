import "./Navbar.css"


export default function Navbar() {
    return (
        <nav className="nav">
            <p className="site-title">
                BH Trip
            </p>
            <div className="topCenter">
            <ul className="topList" >
                <li className="topListItem" >
                    <a href="/">Home</a>
                </li>
                <li className="topListItem" >
                    <a href="/authentication">Login/Sign In</a>
                </li>
                <li className="topListItem" >
                    <a href="/places-to-go">Places to go</a>
                </li>
                <li className="topListItem" >
                    <a href="/plan-your-trip">Plan your trip</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}