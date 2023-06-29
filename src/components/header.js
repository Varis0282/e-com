import Logo from '../assests/logo.png';
import './header.css'

function Header() {
    return (
        <div className='Heading'>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand mb-0 h1">
                        <span id="logo"><img src={Logo} alt="Logo" /></span>
                    </a>
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <form className="d-flex" role="search">
                                    <input className="form-control" id="searchbar" placeholder="Product name Category name.etc." type="search" aria-label="Search" />
                                    <button id="searchbtn" type="submit">Search</button>
                                </form>
                            </li>
                        </ul>
                        <button className="btn me-4" id="log">
                            <b>
                                <a href="/" style={{ color: 'black', textDecoration: 'none' }}>
                                    LOGIN
                                </a>
                            </b>
                        </button>
                        <a href="/" className="logo" id="cart"><i className="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
            </nav>
            <ul className="custom-nav nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/">All Products</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" role="button" href="/">Women</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/">All Products</a>
                        <a className="dropdown-item" href="/">Dresses</a>
                        <a className="dropdown-item" href="/">Pants</a>
                        <a className="dropdown-item" href="/">Skirts</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" role="button" href="/">Men</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/">All Products</a>
                        <a className="dropdown-item" href="/">Shirts</a>
                        <a className="dropdown-item" href="/">Pants</a>
                        <a className="dropdown-item" href="/">Hoodies</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/">Kids</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/">Contact us</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;