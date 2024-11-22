<script>
// @ts-nocheck

	import ContactForm from "./ContactForm.svelte";

    // Ajoutez ici des props ou des gestionnaires d'événements si nécessaire pour le formulaire
  </script>
  
  <section id="contact" class="contact section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span>Contact</span>
      <h2>Contact</h2>
    </div><!-- End Section Title -->
  
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <!-- Adresse Info -->
        <div class="col-lg-6">
          <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
            <i class="bi bi-geo-alt"></i>
            <h3>Adresse</h3>
            <p>Les Rosiers 3, Grand-Bassam, Côte d'Ivoire</p>
          </div>
        </div><!-- End Info Item -->
  
        <!-- Téléphone Info -->
        <div class="col-lg-3 col-md-6">
          <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-telephone"></i>
            <h3>Téléphone</h3>
            <p>+225 07 49 567 951</p>
          </div>
        </div><!-- End Info Item -->
  
        <!-- Email Info -->
        <div class="col-lg-3 col-md-6">
          <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
            <i class="bi bi-envelope"></i>
            <h3>Email</h3>
            <p>info@groupels.com</p>
          </div>
        </div><!-- End Info Item -->
      </div><!-- End Contact Info -->
  
      <div class="row gy-4 mt-1">
        <!-- Google Maps -->
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <!-- svelte-ignore a11y_missing_attribute -->
          <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31786.32444551771!2d-3.790019344851003!3d5.216967914680099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d5.2232192!2d-3.7552128!4m5!1s0xfc1f74de395667d%3A0xfa125f83e83c2b08!2s6689%2B57X%20Les%20Rosiers%203%2C%20Grand-Bassam!3m2!1d5.2154915!2d-3.7817697!5e0!3m2!1sfr!2sci!4v1712162404176!5m2!1sfr!2sci" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div><!-- End Google Maps -->
  
        <!-- Contact Form -->
        <div class="col-lg-6">
            <ContactForm />
        </div><!-- End Contact Form -->
      </div><!-- End Contact Row -->
    </div>
  </section><!-- /Contact Section -->
  