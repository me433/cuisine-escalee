import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <h1>Cuisine Escalée</h1>
        <ul id={"nav"}>
            <li><Link to="recept-toevoegen">Recept toevoegen</Link></li>
            <li><Link to="/">Receptenboek</Link></li>
            <li>Zoeken placeholder</li>
        </ul>
    </nav>
  )
}

export default Nav