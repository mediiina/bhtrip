export default function Navbar() {
    return (
        <nav className="nav">
            <p className="site-title">
                BHTrip
            </p>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/authentication">Login/Sign In</a>
                </li>
                <li>
                    <a href="/places-to-go">Places to go</a>
                </li>
                <li>
                    <a href="/plan-your-trip">Plan your trip</a>
                </li>
            </ul>
        </nav>
    )
}