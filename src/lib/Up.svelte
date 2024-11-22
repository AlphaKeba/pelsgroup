<script>
    import { onMount } from 'svelte';
  
    let showButton = false;
  
    // Fonction pour vérifier la position de défilement
    const checkScroll = () => {
      if (window.scrollY > 300) {
        showButton = true;
      } else {
        showButton = false;
      }
    };
  
    // Ajouter un écouteur d'événements pour le défilement
    onMount(() => {
      window.addEventListener('scroll', checkScroll);
    });
  
    // Fonction pour faire défiler la page vers le haut
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  </script>
  
  <!-- Bouton de scroll vers le haut -->
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <!-- svelte-ignore a11y_invalid_attribute -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center" 
     style="display: {showButton ? 'block' : 'none'}" on:click={scrollToTop}>
    <i class="bi bi-arrow-up-short"></i>
  </a>
  
  <style>
    /* Style pour le bouton de retour en haut */
    #scroll-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #007bff;
      color: white;
      border-radius: 50%;
      padding: 10px;
      font-size: 24px;
      display: none; /* Masqué par défaut */
      z-index: 9999; /* Assurer que le bouton soit au-dessus des autres éléments */
      cursor: pointer;
      transition: opacity 0.3s ease;
    }
  
    #scroll-top:hover {
      background-color: #0056b3;
    }
  
    #scroll-top i {
      font-size: 1.5rem;
    }
  </style>
  