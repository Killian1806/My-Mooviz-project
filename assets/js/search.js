(function () {
  const API_KEY = "78434ed93fa13a8f66de4786b1ca2a32";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query") || "";

    const resultsContainer = document.getElementById("searchResults");
    const desktopInput = document.getElementById("searchInput");
    const mobileInput = document.getElementById("mobileSearchInput");

    // Synchronisation des barres de recherche
    if (desktopInput) desktopInput.value = query;
    if (mobileInput) mobileInput.value = query;

    if (!resultsContainer) return;

    initSearch(query, resultsContainer);
  });

  async function initSearch(query, container) {
    try {
      if (!query) {
        // Mode "Tendances" si aucune recherche
        container.innerHTML = "<h2 class='section-title-centered'>Films Populaires</h2>";
        await fetchAndDisplay(`${api_base}/movie/popular`, container);
      } else {
        // Mode "Recherche"
        container.innerHTML = `<p class='status-msg'>Résultats pour "${query}"...</p>`;
        await fetchAndDisplay(`${api_base}/search/movie`, container, query);
      }
    } catch (err) {
      console.error("Erreur de recherche:", err);
      container.innerHTML = "<p class='error-msg'>Impossible de charger les résultats.</p>";
    }
  }

  const api_base = "https://api.themoviedb.org/3";

  async function fetchAndDisplay(endpoint, container, query = "") {
    const url = new URL(endpoint);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("language", "fr-FR");
    if (query) url.searchParams.append("query", query);

    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      container.innerHTML = `<p class='status-msg'>Aucun film trouvé pour cette recherche.</p>`;
      return;
    }

    renderGrid(data.results, container);
  }

  function renderGrid(movies, container) {
    const title = container.querySelector('h2');
    container.innerHTML = "";
    if (title) container.appendChild(title);

    const fragment = document.createDocumentFragment();

    movies.forEach((movie) => {
      const poster = movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : "assets/img/no_poster.png";

      const card = document.createElement("a");
      card.className = "movie-card";
      card.href = `film.html?movie_id=${movie.id}`;

      card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${poster}" alt="${movie.title}" loading="lazy" width="300" height="450">
                </div>
                <div class="card-info">
                    <h3>${movie.title || "Titre inconnu"}</h3>
                    <span>${movie.release_date ? movie.release_date.split("-")[0] : ""}</span>
                </div>
            `;
      fragment.appendChild(card);
    });

    container.classList.add("results-grid");
    container.appendChild(fragment);
  }
})();