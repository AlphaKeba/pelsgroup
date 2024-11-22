<script>
    // Vous pouvez ajouter ici des variables ou props si besoin pour rendre le header dynamique
  </script>
  
  <header id="header" class="header fixed-top">
    <!-- Top Bar -->
    <div class="topbar d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope d-flex align-items-center">
            <a href="mailto:info@groupels.com">info@groupels.com</a>
          </i>
          <i class="bi bi-phone d-flex align-items-center ms-4">
            <span>+225 07 49 567 951</span>
          </i>
        </div>
        <div class="social-links d-none d-md-flex align-items-center">
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <!-- svelte-ignore a11y_invalid_attribute -->
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <!-- svelte-ignore a11y_invalid_attribute -->
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <!-- svelte-ignore a11y_invalid_attribute -->
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <!-- svelte-ignore a11y_invalid_attribute -->
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
    <!-- End Top Bar -->
  
    <!-- Branding Section -->
    <div class="branding">
      <div class="container position-relative d-flex align-items-center justify-content-between">
        <a href="/" class="logo d-flex align-items-center">
          <img src="/assets/img/ok_gp1.png" alt="GROUPE PELS" />
          <h2 id="groupels" style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;">
            GROUPE PELS
          </h2>
        </a>
  
        <!-- Navigation Menu -->
        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="#hero" class="">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/pels-ivoire">PELS IVOIRE</a></li>
            <li><a href="/pels-assist">PELS ASSIST</a></li>
            <li><a href="https://www.pelsconstruct.com">PELS CONSTRUCT</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </div>
  </header>
  