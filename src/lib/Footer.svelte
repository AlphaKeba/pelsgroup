<script>
    // Vous pouvez ajouter des props ou des méthodes si nécessaire pour gérer l'interaction avec le formulaire de newsletter
  </script>
  
  <footer id="footer" class="footer position-relative">
    <!-- Footer Top -->
    <div class="container footer-top">
      <div class="row gy-4">
        <!-- Footer About -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-about">
            <a href="/" class="logo">
              <img src="/assets/img/gp_blanc.png" alt="GROUPE PELS" />
            </a>
            <div class="footer-contact pt-3">
              <p>Les Rosiers 3, Grand-Bassam</p>
              <p>Côte d'Ivoire</p>
              <p class="mt-3"><strong>Phone:</strong> <span>+225 07 49 567 951</span></p>
              <p><strong>Email:</strong> <span>info@groupels.com</span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <!-- svelte-ignore a11y_consider_explicit_label -->
              <!-- svelte-ignore a11y_invalid_attribute -->
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <!-- svelte-ignore a11y_consider_explicit_label -->
              <!-- svelte-ignore a11y_invalid_attribute -->
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <!-- svelte-ignore a11y_consider_explicit_label -->
              <!-- svelte-ignore a11y_invalid_attribute -->
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <!-- svelte-ignore a11y_consider_explicit_label -->
              <!-- svelte-ignore a11y_invalid_attribute -->
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div><!-- End Footer About -->
  
        <!-- Footer Links -->
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Liens Utiles</h4>
          <ul>
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">A Propos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="https://pelsconstruct.com">PELS CONSTRUCT</a></li>
            <li><a href="ivoire.html">PELS IVOIRE</a></li>
          </ul>
        </div><!-- End Footer Links -->
  
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Nos Services</h4>
          <ul>
            <li><a href="construci.html">PELS CONSTRUCI</a></li>
            <li><a href="tour.html">IVOIRETOUR</a></li>
            <li><a href="print.html">PELS PRINT</a></li>
            <li><a href="tour.html">Résidences Meublées</a></li>
            <li><a href="assist.html">PELS ASSIST</a></li>
          </ul>
        </div><!-- End Footer Links -->
  
        <!-- Footer Newsletter -->
        <div class="col-lg-4 col-md-12 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <form action="forms/contact.php" method="post" class="php-email-form">
            <div class="newsletter-form">
              <input type="email" name="email" required placeholder="Votre email" />
              <input type="submit" value="Subscribe" />
            </div>
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Votre message a bien été envoyé. Merci !</div>
          </form>
        </div><!-- End Footer Newsletter -->
      </div><!-- End Row -->
    </div><!-- End Footer Top -->
  
    <!-- Footer Bottom -->
    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1">GROUPE PELS</strong> <span>Tous droits réservés</span></p>
      <div class="credits">
        Designed by <a href="https://google.com/" target="_blank">PUB Vision</a>
      </div>
    </div><!-- End Footer Bottom -->
  
    <!-- Scroll Top -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  
    <!-- Preloader -->
    <div id="preloader"></div>
  </footer>
