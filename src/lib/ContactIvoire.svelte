<script>
// @ts-nocheck

    // Ajoutez une logique ou des données dynamiques si nécessaire
  </script>
  
  <section id="contact" class="contact section">
    <div class="container section-title" data-aos="fade-up">
      <span>Contact</span>
      <h2>Contact</h2>
    </div>
  
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-6">
          <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
            <i class="bi bi-geo-alt"></i>
            <h3>Adresse</h3>
            <p>Les Rosiers 3, Grand-Bassam, Côte d'Ivoire</p>
          </div>
        </div>
  
        <div class="col-lg-3 col-md-6">
          <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-telephone"></i>
            <h3>Téléphone</h3>
            <p>+225 07 49 567 951</p>
          </div>
        </div>
  
        <div class="col-lg-3 col-md-6">
          <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
            <i class="bi bi-envelope"></i>
            <h3>Email</h3>
            <p>info@groupels.com</p>
          </div>
        </div>
      </div>
  
      <div class="row gy-4 mt-1">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <!-- svelte-ignore a11y_missing_attribute -->
          <iframe src="https://www.google.com/maps/embed?pb=!1m26!..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="col-lg-6">
          <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="400">
            <div class="row gy-4">
              <div class="col-md-6">
                <input type="text" name="name" class="form-control" placeholder="Votre Nom" required>
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" name="email" placeholder="Votre Email" required>
              </div>
              <div class="col-md-12">
                <input type="text" class="form-control" name="subject" placeholder="Sujet" required>
              </div>
              <div class="col-md-12">
                <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
              </div>
              <div class="col-md-12 text-center">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Votre message a bien été envoyé. Merci!</div>
                <button type="submit">Envoyer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  