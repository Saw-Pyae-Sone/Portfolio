function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-success navbar-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Skills</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar