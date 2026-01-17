(function () {
  const TMDB_API_KEY = "78434ed93fa13a8f66de4786b1ca2a32";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

  document.addEventListener("DOMContentLoaded", () => {
    // Gestion du bouton retour
    const backBtn = document.getElementById("backBtn");
    if (backBtn) {
      backBtn.onclick = () => {
        (window.history.length > 1) ? window.history.back() : window.location.href = "home.html";
      };
    }

    // Récupération de l'ID
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("movie_id") || params.get("id");

    if (movieId && movieId !== "undefined") {
      loadMovieDetails(movieId);
    } else {
      displayFallback(params.get("title"));
    }
  });

  async function loadMovieDetails(id) {
    const titleEl = document.getElementById("movie-title");
    
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=fr-FR&append_to_response=videos`
      );
      
      if (!res.ok) throw new Error("Film introuvable");
      const movie = await res.json();

      // Mise à jour du DOM
      updateDOM(movie);
      
      // Configuration de la wishlist
      setupWishlistButton({
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
      });

    } catch (err) {
      console.error(err);
      if (titleEl) titleEl.textContent = "Erreur lors du chargement des données.";
    }
  }

  function updateDOM(movie) {
    // Utilisation de sélecteurs directs pour la clarté
    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText("movie-title", movie.title);
    setText("movie-overview", movie.overview || "Aucun résumé disponible.");
    setText("movie-release-date", movie.release_date || "Non communiquée");
    setText("movie-vote-average", movie.vote_average ? `${movie.vote_average.toFixed(1)} / 10` : "Non noté");
    setText("movie-genres", movie.genres.map((g) => g.name).join(" • "));

    const posterEl = document.getElementById("movie-poster");
    if (posterEl) posterEl.src = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "assets/img/no_poster.png";

    // Gestion Trailer
    const trailerContainer = document.getElementById("trailer-container");
    const video = movie.videos?.results.find(v => v.type === "Trailer" && v.site === "YouTube");
    
    if (video && trailerContainer) {
      trailerContainer.innerHTML = `
        <iframe width="100%" height="350" 
                src="https://www.youtube.com/embed/${video.key}" 
                frameborder="0" allowfullscreen 
                loading="lazy"></iframe>`;
    }
  }

  function setupWishlistButton(movieObj) {
    const addBtn = document.getElementById("addList");
    const modal = document.getElementById("wishlistModal");
    const closeBtn = document.getElementById("closeModal");
    
    if (!addBtn) return;

    // Récupération sécurisée du localStorage
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem("moviesList")) || [];
    } catch(e) { list = []; }

    // Vérification présence
    const isAlreadyInList = list.some(m => m.id == movieObj.id);

    if (isAlreadyInList) {
      addBtn.textContent = "✓";
      addBtn.classList.add("btn-disabled"); 
      addBtn.disabled = true;
    }

    addBtn.onclick = () => {
      list.push(movieObj);
      localStorage.setItem("moviesList", JSON.stringify(list));
      
      addBtn.textContent = "✓ Dans ma liste";
      addBtn.disabled = true;
      if (modal) modal.style.display = "flex";
    };

    // Fermeture Modal
    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
  }

  function displayFallback(title) {
    const titleEl = document.getElementById("movie-title");
    const overviewEl = document.getElementById("movie-overview");
    if (titleEl) titleEl.textContent = title || "Sélectionnez un film";
    if (overviewEl) overviewEl.textContent = "Veuillez retourner à l'accueil pour sélectionner ce film.";
  }
})();