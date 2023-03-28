import React from 'react';
import Menu from './menu';
import Sidebar from './move_sidebar';

class Home extends React.Component{
    render(){
        return (
        <div>
             <header id="header" className="d-flex align-items-center">
             <div className="container d-flex align-items-center">
          <div className="logo me-auto">
           <h1><a href="index.html">Situation Des Barrages En Tunisie</a></h1>
        
       <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
      </div>
      <div className="sidebar close">
        <div className="logo-details">
          <i className='bx bx-menu' ></i>
          <span className="logo_name">MENU</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="index.html">
              <i className='bx bxs-home' ></i>
              <span className="link_name">Acceuil</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Acceuil</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-grid-alt' ></i>
              <span className="link_name">Dashboard</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Dashboard</a></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <a href="#">
                <i className='bx bx-collection' ></i>
                <span className="link_name">Barrages</span>
              </a>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Barrages</a></li>
              <li><a href="#">Mellegue</a></li>
              <li><a href="#">Sidi Salem</a></li>
              <li><a href="#">Bou Heurtma</a></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <a href="#">
                <i className='bx bx-line-chart' ></i>
                <span className="link_name">Prévisions</span>
              </a>
              <i className='bx bxs-chevron-down arrow' ></i>
             </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Prévisions</a></li>
              <li><a href="#">Globale</a></li>
              <li><a href="#">Par Barrage</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-bar-chart-alt-2'></i>
              <span className="link_name">Statistiques</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Statistiques</a></li>
            </ul>
          </li>
          
          <li>
            <a href="inner-page.html">
              <i className='bx bx-log-in'></i>
              <span className="link_name">Sign In</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Sign In</a></li>
            </ul>
          </li>
         
          <li>
            <a href="inner-page.html">
              <i className='bx bxs-user-plus' ></i>
              <span className="link_name">Sign Up</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Sign Up</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-cog' ></i>
              <span className="link_name">Settings</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Settings</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-brightness-high-fill" id="toggleDark"></i>
              <span className="link_name">Dark Mode</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Dark Mode</a></li>
            </ul>
          </li>
        </ul>
       
      </div>
     
    </div>  
    <Sidebar />
  </header >
  
 

  
  <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

     
          <div className="carousel-item active" style={{backgroundImage: "url('assets/img/slide/mellegue.jpg')"}}>
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">MELLEGUE</h2>
                <p className="animate__animated animate__fadeInUp">Le barrage Mellègue ou barrage de Nebeur est un barrage tunisien construit entre 1949 et 1956, sur l'oued Mellègue, à environ sept kilomètres à l'ouest de la ville de Nebeur (gouvernorat du Kef).</p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>

          <div className="carousel-item" style={{backgroundImage: "url('assets/img/slide/Barrage_beni_mtir.jpg')"}}>
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">BENI MTIR</h2>
                <p className="animate__animated animate__fadeInUp">Le barrage de Beni M'Tir ou barrage de Beni Metir est un barrage tunisien situé sur l'oued Ellil, au sud-ouest d'Aïn Draham. Il porte le nom de Beni M'Tir, village qui le surplombe. Les travaux de construction ont commencé en 1946 et se sont achevés en 1953</p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>

          <div className="carousel-item"style={{backgroundImage: "url('assets/img/slide/kasseb.jpg')"}} >
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">KASSEB</h2>
                <p className="animate__animated animate__fadeInUp">Le barrage Kasseb est un barrage tunisien inauguré en 1969, sur l'oued Kasseb, 
                  situé à une vingtaine de kilomètres à l'ouest de Béja. D'une hauteur de 57,6 mètres et d'une longueur en crête de 245 mètres, il peut retenir 
                  jusqu'à 80 millions de mètres cubes d'eau dans un réservoir d'une superficie de 437 hectares. </p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>
         
           <div className="carousel-item"style={{backgroundImage:" url('assets/img/slide/Barrage_sidi_salem (1).jpg')"}} >
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">SIDI SALEM</h2>
                <p className="animate__animated animate__fadeInUp">Le barrage de Sidi Salem est le plus grand barrage de Tunisie. Construit au niveau de la ville de Testour, à 8 kilomètres au nord-ouest de cette dernière, 
                  il se trouve sur le cours de la Medjerda. </p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>
          
           <div className="carousel-item" style={{backgroundImage: "url('assets/img/slide/Barrage_Sidi_Barrak.jpg')"}}>
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">SIDI EL BARRAK</h2>
                <p className="animate__animated animate__fadeInUp">Le barrage de Sidi El Barrak est un barrage de Tunisie. 
                  Il se situe dans le nord-ouest du pays, à deux kilomètres de la côte, près de la ville de Nefza, dans le gouvernorat de Béja.
                 Bâti en remblais argileux, sa longueur de crête est de 595 m pour une largeur de huit mètres.</p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>
          
           <div className="carousel-item" style={{backgroundImage:" url('assets/img/slide/sejnene.jpg')"}}>
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">SEJNANE</h2>
                <p className="animate__animated animate__fadeInUp">Le barrage de Sejnane est un barrage tunisien 
                  inauguré en 1994 sur l'oued Sejnane, à environ 23 kilomètres au nord-est de Sejnane.
                  Barrage en terre, il peut retenir jusqu'à 113,580 millions de mètres cubes d'eau. </p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>
       
           <div className="carousel-item" style={{backgroundImage: "url('assets/img/slide/tunisie-barrages-bouherthma.jpg')"}}>
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animate__animated animate__fadeInDown">BOU HERTMA</h2>
                <p className="animate__animated animate__fadeInUp">Le barrage de Bou Heurtma est un barrage hydroélectrique de Tunisie. Il se situe dans le nord-ouest du pays, 
                  dans le gouvernorat de Jendouba. </p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>
        

        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </div>
    <Menu />
  </section>
  
<main id="main">
  
<section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row no-gutters">
          <div class="col-lg-6 video-box">
            <img src="assets/img/1200px-Barage_sidi_salem (1).jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 d-flex flex-column justify-content-center about-content">
            <div class="section-title">
              <h2>Les Barrages En Tunisie</h2>
              <p>La Tunisie demeure un pays aride à semi-aride sur les 3/4 de son territoire. Elle se caractérise par la rareté de ses ressources en eau et par une variabilité accentuée du climat dans l’espace et dans le temps. L’eau est un facteur essentiel pour le développement du secteur agricole, industriel et touristique et vital pour l’alimentation en eau potable. Le maintien de la croissance économique reste tributaire du facteur eau qui est cependant un
                facteur limitant et limité. La construction des barrages en Tunisie a permis une meilleure 
                gestion des ressources hydrauliques. </p>
              <br/>
              <p>Les barrages tunisiens sont aujourd'hui gérés par la direction générale 
                des barrages et des grands travaux hydrauliques (DGBGTH) La généralité des barrages tunisiens est des
                 barrages en terre et la majorité de ces barrages se trouvent dans le nord.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  

    <section className="about-lists">
      <div className="container">

        <div className="row no-gutters">

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up">
            <span>01</span>
            <h4>MELLEGUE</h4>
            <p>Le barrage, de type voûtes multiples de grande portée, a une hauteur de 65 mètres et sa longueur en crête est de 470 mètres. 
              Le déversoir, du type saut de ski avec étalement de la lame, a un débit maximum de 5 400 m3/s.</p>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="50">
            <span>02</span>
            <h4>BENI MTIR</h4>
            <p>Le barrage de Beni M'Tir compte parmi les plus importants en Tunisie.Situé sur l'oued Ellil, au sud-ouest d'Aïn Draham, ce barrage contribuait à l'approvisionnement en eau de la région de Tunis.
               Désormais, il approvisionne le gouvernorat de Jendouba, Béja et autres régions situées au nord de Tunis.
              Il sert également à l'irrigation de la basse vallée de la Medjerda ainsi qu'à la production d'électricité.</p>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="100">
            <span>03</span>
            <h4> SIDI SALEM</h4>
            <p>Le barrage de Sidi Salem est construit au niveau de la ville de Testour,
               à 8 kilomètres au nord-ouest de cette dernière, il se trouve sur le cours de la Medjerda.Avec une hauteur de 57 mètres, 
               une longueur en crête de 340 mètres et une capacité à retenue normale de 555 millions de m³ pour une surface de réservoir de 4300 hectares, 
               il constitue le plus grand barrage du pays</p>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="150">
            <span>04</span>
            <h4>KASSEB</h4>
            <p>Le barrage Kasseb est un barrage tunisien inauguré en 1969, sur l'oued Kasseb, situé à une vingtaine de kilomètres à l'ouest de Béja.
               D'une hauteur de 57,6 mètres et d'une longueur en crête de 245 mètres, il peut retenir jusqu'à 80 millions de mètres cubes d'eau dans un réservoir
              d'une superficie de 437 hectares. L'eau du réservoir est principalement destinée à l'alimentation en eau potable de la ville de Tunis 
              et non à l'irrigation.</p>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
            <span>05</span>
            <h4> SIDI EL BARRAK</h4>
            <p>Le barrage de Sidi el Barrak se localise au niveau de la côte nord de le Tunisie : gouvernorat de Béja .
               Le barrage de Sidi el Barrak présente celui le plus important de Tunisie, après le barrage de Sidi Salem, il a été destiné pour les besoins suivantes :  L'irrigation , alimentation en eau potable du grand Tunis,
               le sahel et Sfax et l'amélioration de la qualité des eaux du canal du Medjerda Cap Bon. </p>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="250">
            <span>06</span>
            <h4>SEJNANE</h4>
            <p>Le barrage de Sejnane est un barrage tunisien inauguré en 1994 sur l'oued Sejnane, à environ 23 kilomètres au nord-est de Sejnane.Barrage en terre, il peut retenir jusqu'à 113,580 millions de mètres cubes d'eau. L'eau du réservoir est principalement destinée à l'eau potable. 
              L'ouvrage est par ailleurs interconnecté avec le barrage de Sidi El Barrak.</p>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="250">
            <span>07</span>
            <h4>BOU-HEURTMA</h4>
            <p>Le barrage de Bou Heurtma est un barrage hydroélectrique de Tunisie. Il se situe dans le nord-ouest du pays, dans le gouvernorat de Jendouba.

            </p>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="250">
            <span>08</span>
            <h4>SILIANA</h4>
            <p>Le barrage de Siliana est un barrage tunisien inauguré en 2005 sur l'oued Siliana, à sept kilomètres au nord de Siliana. Le barrage a une capacité de 53 millions de mètres cubes1.</p>
          </div>

          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="250">
            <span>09</span>
            <h4>LAKHMESS</h4>
            <p>Le barrage Lakhmess est un barrage tunisien inauguré en 1966, sur l'oued Lakhmess, situé à environ quinze kilomètres au sud-est de Siliana.Les principaux oueds qui alimentent le barrage en eau ruissèlent des hauteurs du Djebel Serj assez proche.
              D'une hauteur de 32 mètres et d'une longueur en crête de 660 mètres, il peut retenir jusqu'à 14 millions de mètres cubes d'eau dans un réservoir d'une superficie de 1 120 hectares. L'eau du réservoir est destinée à l'irrigation de cultures annuelles et arboricoles dans la région de Siliana avec un volume annuel prévu de 7 millions de mètres cubes.</p>
          </div>

        </div>

      </div>
    </section>

    
    <section className="counts section-bg">
      <div className="container">

        <div className="row">

          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
            <div className="count-box">
              <i className="bi bi-simple-smile" ></i>
              <span data-purecounter-start="0" data-purecounter-end="36" data-purecounter-duration="1" className="purecounter"></span>
              <p>BARRAGES</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="count-box">
              <i className="bi bi-document-folder" ></i>
              <span data-purecounter-start="0" data-purecounter-end="13" data-purecounter-duration="1" className="purecounter"></span>
              <p>S/T NORD</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="count-box">
              <i className="bi bi-live-support" ></i>
              <span data-purecounter-start="0" data-purecounter-end="7" data-purecounter-duration="1" className="purecounter"></span>
              <p>S/T CENTRE</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="count-box">
              <i className="bi bi-users-alt-5" ></i>
              <span data-purecounter-start="0" data-purecounter-end="6" data-purecounter-duration="1" className="purecounter"></span>
              <p>S/T CAP-BON</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>

  
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <script src="assets/js/main.js"></script>

        </div>);
    }
} 

export default Home;