(function () {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

  document.addEventListener("DOMContentLoaded", () => {
    const listDiv = document.getElementById("movie-list");
    if (!listDiv) return;

    renderWishlist(listDiv);
  });

  function renderWishlist(container) {
    let moviesList = [];
    
    // Récupération sécurisée
    try {
      moviesList = JSON.parse(localStorage.getItem("moviesList")) || [];
    } catch (e) {
      console.error("Erreur de lecture du stockage", e);
      moviesList = [];
    }

    // Cas liste vide
    if (moviesList.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p id='empty-message'>Votre wishlist est vide.</p>
          <a href="home.html" class="btn-primary">Découvrir des films</a>
        </div>`;
      return;
    }

    // Construction
    container.innerHTML = "";
    const fragment = document.createDocumentFragment();

    moviesList.forEach((movie, index) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("wishlist-card");

      const poster = movie.posterPath
        ? `${IMAGE_BASE_URL}${movie.posterPath}`
        : "assets/img/no_poster.png";

      movieElement.innerHTML = `
                <a href="film.html?movie_id=${movie.id}" class="movie-link">
                    <div class="img-container">
                        <img src="${poster}" alt="${movie.title}" loading="lazy">
                    </div>
                    <h3>${movie.title}</h3>
                </a>
                <button class="remove-btn" data-id="${movie.id}">Supprimer</button>
            `;
      
      fragment.appendChild(movieElement);
    });

    container.appendChild(fragment);

    // Gestion de la suppression par délégation
    setupRemoveListeners(container);
  }

  function setupRemoveListeners(container) {
    container.onclick = (e) => {
      if (e.target.classList.contains("remove-btn")) {
        const movieId = e.target.getAttribute("data-id");
        removeFromWishlist(movieId, container);
      }
    };
  }

  function removeFromWishlist(id, container) {
    try {
      let moviesList = JSON.parse(localStorage.getItem("moviesList")) || [];
      // On filtre par ID plutôt que par index
      moviesList = moviesList.filter(m => m.id != id);
      
      localStorage.setItem("moviesList", JSON.stringify(moviesList));
      
      // Animation optionnelle avant de rendre à nouveau
      renderWishlist(container);
    } catch (e) {
      console.error("Erreur lors de la suppression", e);
    }
  }
})();