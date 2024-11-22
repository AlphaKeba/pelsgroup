<script>
// @ts-nocheck

    import ContactForm from "$lib/ContactForm.svelte";
  </script>
  
  <section id="contact" class="contact section">
    <div class="container section-title" data-aos="fade-up">
      <span>Contact</span>
      <h2>Contact</h2>
    </div>
  
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-6">
          <div
            class="info-item d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i class="bi bi-geo-alt"></i>
            <h3>Adresse</h3>
            <p>Les Rosiers 3, Grand-Bassam, Côte d'Ivoire</p>
          </div>
        </div>
  
        <div class="col-lg-3 col-md-6">
          <div
            class="info-item d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <i class="bi bi-telephone"></i>
            <h3>Téléphone</h3>
            <p>+225 07 49 567 951</p>
          </div>
        </div>
  
        <div class="col-lg-3 col-md-6">
          <div
            class="info-item d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i class="bi bi-envelope"></i>
            <h3>Email</h3>
            <p>info@groupels.com</p>
          </div>
        </div>
      </div>
  
      <div class="row gy-4 mt-1">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <!-- svelte-ignore a11y_missing_attribute -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!..."
            width="600"
            height="450"
            style="border: 0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        <div class="col-lg-6">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
  