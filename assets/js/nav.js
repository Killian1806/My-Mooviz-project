(function() {
  function setActiveNavLink() {
    // On récupère seulement le nom du fichier
    const currentPath = window.location.pathname.split("/").pop().split("?")[0].split("#")[0] || "home.html";
    
    const navItems = document.querySelectorAll(".nav-bottom .nav-item");

    navItems.forEach((item) => {
      const itemHref = item.getAttribute("href");
      item.classList.remove("active");

      if (currentPath === itemHref) {
        item.classList.add("active");
      } 
      
      // Cas spécial : Si on est sur "film.html" ou "filmTrie.html", 
      else if ((currentPath === "film.html" || currentPath === "filmTrie.html") && itemHref === "home.html") {
        item.classList.add("active");
      }

      // Cas spécial pour la racine du site
      else if ((currentPath === "" || currentPath === "index.html") && itemHref === "home.html") {
        item.classList.add("active");
      }
    });
  }

  // exécution au chargement du DOM
  document.addEventListener("DOMContentLoaded", setActiveNavLink);
})();