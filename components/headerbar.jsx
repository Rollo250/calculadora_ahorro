import Link from 'next/link';
import '../styles/headerbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <Link className="navbar-brand" href="/">
              Roger
            </Link>
            <div className="social-media order-lg-last">
              <p className="mb-0 d-flex">
                <Link href="#" className="d-flex align-items-center justify-content-center">
                  <span className="fa fa-facebook"><i className="sr-only">Facebook</i></span>
                </Link>
                <Link href="#" className="d-flex align-items-center justify-content-center">
                  <span className="fa fa-twitter"><i className="sr-only">Twitter</i></span>
                </Link>
                <Link href="#" className="d-flex align-items-center justify-content-center">
                  <span className="fa fa-instagram"><i className="sr-only">Instagram</i></span>
                </Link>
                <Link href="#" className="d-flex align-items-center justify-content-center">
                  <span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span>
                </Link>
              </p>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto mr-md-3">
                <li className="nav-item active">
                  <Link  className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/work">
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
