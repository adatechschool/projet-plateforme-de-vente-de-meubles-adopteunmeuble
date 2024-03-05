import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="header">
            <div id="logo-h"><Link to="products/1">Logo btn Home</Link></div>
            <div id="website-title"><Link to="products">Site Title</Link></div>
            <div id="wishlist">wishlist</div>
            <div id="user-account">user</div>
        </div>
    );
}

export default Header;
