/* eslint-disable @typescript-eslint/ban-ts-comment */
// src/routes/+layout.server.js
export function load({ url }) {
  // Logique pour définir les métadonnées en fonction de l'URL
  const routes = {
      "/pels-ivoire": {
          title: "PELS Ivoire",
          description: "Bienvenue sur la plateforme officielle de PELS Ivoire.",
          favicon: "/assets/img/ok_ivoire.ico"
      },
      "/pels-assist": {
          title: "PELS Assist",
          description: "Découvrez nos services d’assistance avec PELS Assist.",
          favicon: "/assets/img/ass_gp.ico"
      },
      "/": {
          title: "Accueil",
          description: "Bienvenue sur le site officiel de GROUP PELS.",
          favicon: "/assets/img/ok__gp.ico"
      }
  };

  // @ts-expect-error
  const currentRoute = routes[url.pathname] || routes["/"];
  return currentRoute;
}
