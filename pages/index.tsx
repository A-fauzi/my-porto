import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>

      {/* Navbar */}
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

      {/* Content */}
      {/* Hero */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image src={"/img/my_photo.png"} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Hi! I Am <br /> <span className='text-warning'>Akhmad Fauzi</span></h1>
            <p className="lead">Passionate Muslim programmer and Android developer 📱💻 | Embracing the power of technology while staying true to my faith 🕌 | Sharing insights on mobile tech.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="mailto: akhmadfauzi9797@gmail.com" type="button" className="btn btn-primary btn-sm rounded-pill p-2 px-4">Hire Me</a>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="container px-4 py-5">

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h3 className="fw-bold">My Awesome <br /> <span className='text-warning'>Service</span></h3>
            <p className="text-muted">Saya menawarkan layanan pengembangan aplikasi Android, pembuatan dan pengelolaan website, serta solusi digital lainnya. Dengan keahlian yang saya miliki, saya dapat menciptakan aplikasi yang fungsional dan menarik, desain website responsif dan sesuai dengan merek Anda, serta solusi digital yang membantu bisnis Anda tumbuh dan berhasil.</p>
            <a href="https://drive.google.com/file/d/148wvcIop0PD0CpZTkieLh3jY062KKSCf/view?usp=drivesdk" type="button" className="btn btn-primary btn-sm rounded-pill p-2 px-4">Download CV</a>
          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#collection" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0">Featured title</h4>
                <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#gear-fill" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0">Featured title</h4>
                <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#speedometer" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0">Featured title</h4>
                <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#table" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0">Featured title</h4>
                <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
    </>
  )
}
