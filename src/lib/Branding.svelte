<script>
    // Vous pouvez ajouter des variables ou des props pour dynamiser le composant
  </script>
  
  <div class="branding">
    <div class="container position-relative d-flex align-items-center justify-content-between">
      <a href="/" class="logo d-flex align-items-center">
        <img src="/assets/img/ok_gp1.png" alt="GROUPE PELS" />
        <h2 id="groupels" class="groupels-text">GROUPE PELS</h2>
      </a>
  
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#about">A Propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li class="dropdown has-dropdown">
            <a href="ivoire.html">
              <span>PELS IVOIRE</span> <i class="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li class="dropdown has-dropdown">
                <a href="construci.html">
                  <span>PELS CONSTRUCI</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li><a href="construci.html">Projet PELS</a></li>
                  <li><a href="construci.html">PELS CONSTRUCTION</a></li>
                  <li><a href="construci.html">PELS RENOVATION</a></li>
                </ul>
              </li>
              <li><a href="print.html">PELS PRINT</a></li>
              <li class="dropdown has-dropdown">
                <a href="tour.html">
                  <span>PELS TOUR</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li><a href="tour.html">IVOIRE TOUR</a></li>
                  <li><a href="tour.html">RESIDENCES PELS</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="assist.html">PELS ASSIST</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </div>
  
  <style>
    /* Si le style est dans un fichier global, supprimez ce bloc */
    .groupels-text {
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      margin-left: 10px;
    }
  
    .navmenu ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    .dropdown ul {
      display: none;
      position: absolute;
      background: white;
    }
  
    .dropdown:hover > ul {
      display: block;
    }
  </style>
  