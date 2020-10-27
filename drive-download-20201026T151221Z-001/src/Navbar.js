import './App.css';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
        <div className="container">
            <a className="navbar-brand h2" href="#">Services Discovery</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
    )
}
export default Navbar