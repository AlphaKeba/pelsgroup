<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  
    // Variables pour stocker les données du formulaire
    let name = "";
    let email = "";
    let subject = "";
    let message = "";
  
    // Erreurs de validation
    let errors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  
    // Fonction de validation
    function validateForm() {
      let valid = true;
  
      if (!name) {
        errors.name = "Le nom est requis.";
        valid = false;
      } else {
        errors.name = "";
      }
  
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Un email valide est requis.";
        valid = false;
      } else {
        errors.email = "";
      }
  
      if (!subject) {
        errors.subject = "Le sujet est requis.";
        valid = false;
      } else {
        errors.subject = "";
      }
  
      if (!message) {
        errors.message = "Le message est requis.";
        valid = false;
      } else {
        errors.message = "";
      }
  
      return valid;
    }
  
    // Soumission du formulaire
    /**
	 * @param {{ preventDefault: () => void; }} event
	 */
    async function handleSubmit(event) {
      event.preventDefault();
  
      if (!validateForm()) {
        return;
      }
  
      // Simuler un envoi
      try {
        console.log("Données envoyées : ", { name, email, subject, message });
        dispatch("formSubmit", { name, email, subject, message });
        alert("Votre message a été envoyé avec succès !");
        // Réinitialiser le formulaire
        name = "";
        email = "";
        subject = "";
        message = "";
      } catch (error) {
        console.error("Erreur lors de l'envoi du message : ", error);
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    }
  </script>
  
  <!-- HTML -->
  <form on:submit|preventDefault={handleSubmit} class="php-email-form">
    <div class="row gy-4">
      <div class="col-md-6">
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="Votre nom"
          bind:value={name}
          required
        />
        {#if errors.name}
          <p class="error">{errors.name}</p>
        {/if}
      </div>
  
      <div class="col-md-6">
        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="Votre email"
          bind:value={email}
          required
        />
        {#if errors.email}
          <p class="error">{errors.email}</p>
        {/if}
      </div>
  
      <div class="col-md-12">
        <input
          type="text"
          name="subject"
          class="form-control"
          placeholder="Sujet"
          bind:value={subject}
          required
        />
        {#if errors.subject}
          <p class="error">{errors.subject}</p>
        {/if}
      </div>
  
      <div class="col-md-12">
        <textarea
          name="message"
          rows="6"
          class="form-control"
          placeholder="Votre message"
          bind:value={message}
          required
        ></textarea>
        {#if errors.message}
          <p class="error">{errors.message}</p>
        {/if}
      </div>
  
      <div class="col-md-12 text-center">
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </div>
    </div>
  </form>
  
<!--   <style>
    .error {
      color: red;
      font-size: 0.9rem;
      margin-top: 5px;
    }
  
    .php-email-form {
      margin-top: 20px;
    }
  
    .php-email-form input,
    .php-email-form textarea {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 10px;
    }
  
    .php-email-form button {
      background-color: #007bff;
      border: none;
      padding: 10px 20px;
      color: #fff;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .php-email-form button:hover {
      background-color: #0056b3;
    }
  </style>
   -->