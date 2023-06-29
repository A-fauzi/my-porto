export default function Navbar() {
  return (
       <>
         <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4">Personal</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
            <button type="button" className="btn btn-primary btn-sm rounded-pill p-2 px-4">Contact Us</button>
          </ul>
        </header>
      </div>
       </>
    )
}