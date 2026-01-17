
(function () {

  const API_KEY = "78434ed93fa13a8f66de4786b1ca2a32";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

  const countryNames = {
  AF: "Afghanistan", AL: "Albanie", DZ: "Algérie", AD: "Andorre", AO: "Angola", AG: "Antigua-et-Barbuda", AR: "Argentine", AM: "Arménie", AU: "Australie",
  AT: "Autriche", AZ: "Azerbaïdjan", BS: "Bahamas", BH: "Bahreïn", BD: "Bangladesh", BB: "Barbade", BY: "Biélorussie", BE: "Belgique", BZ: "Belize", BJ: "Bénin",
  BT: "Bhoutan", BO: "Bolivie", BA: "Bosnie-Herzégovine", BW: "Botswana", BR: "Brésil", BN: "Brunei", BG: "Bulgarie", BF: "Burkina Faso", BI: "Burundi",
  CV: "Cap-Vert", KH: "Cambodge", CM: "Cameroun", CA: "Canada", CF: "RCA", TD: "Tchad", CL: "Chili", CN: "Chine", CO: "Colombie", KM: "Comores",
  CG: "Congo", CR: "Costa Rica", HR: "Croatie", CU: "Cuba", CY: "Chypre", CZ: "Rép. Tchèque", DK: "Danemark", DJ: "Djibouti", DM: "Dominique",
  DO: "Rép. Dominicaine", TL: "Timor Oriental", EC: "Équateur", EG: "Égypte", SV: "El Salvador", GQ: "Guinée Équat.", ER: "Érythrée", EE: "Estonie",
  SZ: "Eswatini", ET: "Éthiopie", FJ: "Fidji", FI: "Finlande", FR: "France", GA: "Gabon", GM: "Gambie", GE: "Géorgie", DE: "Allemagne", GH: "Ghana",
  GR: "Grèce", GD: "Grenade", GT: "Guatemala", GN: "Guinée", GW: "Guinée-Bissau", GY: "Guyana", HT: "Haïti", HN: "Honduras", HU: "Hongrie", IS: "Islande",
  IN: "Inde", ID: "Indonésie", IR: "Iran", IQ: "Irak", IE: "Irlande", IL: "Israël", IT: "Italie", JM: "Jamaïque", JP: "Japon", JO: "Jordanie",
  KZ: "Kazakhstan", KE: "Kenya", KI: "Kiribati", KP: "Corée du Nord", KR: "Corée du Sud", KW: "Koweït", KG: "Kirghizistan", LA: "Laos",
  LV: "Lettonie", LB: "Liban", LS: "Lesotho", LR: "Libéria", LY: "Libye", LI: "Liechtenstein", LT: "Lituanie", LU: "Luxembourg", MG: "Madagascar",
  MW: "Malawi", MY: "Malaisie", MV: "Maldives", ML: "Mali", MT: "Malte", MH: "Îles Marshall", MR: "Mauritanie", MU: "Maurice", MX: "Mexique",
  FM: "Micronésie", MD: "Moldavie", MC: "Monaco", MN: "Mongolie", ME: "Monténégro", MA: "Maroc", MZ: "Mozambique", MM: "Myanmar",
  NA: "Namibie", NR: "Nauru", NP: "Népal", NL: "Pays-Bas", NZ: "N-Zélande", NI: "Nicaragua", NE: "Niger", NG: "Nigéria", MK: "Macédoine", NO: "Norvège",
  OM: "Oman", PK: "Pakistan", PW: "Palaos", PA: "Panama", PG: "Papouasie", PY: "Paraguay", PE: "Pérou", PH: "Philippines", PL: "Pologne", PT: "Portugal",
  QA: "Qatar", RO: "Roumanie", RU: "Russie", RW: "Rwanda", KN: "St-Kitts", LC: "Ste-Lucie", VC: "St-Vincent", WS: "Samoa", SM: "Saint-Marin",
  ST: "Sao Tomé", SA: "Arabie Saoudite", SN: "Sénégal", RS: "Serbie", SC: "Seychelles", SL: "Sierra Leone", SG: "Singapour", SK: "Slovaquie",
  SI: "Slovénie", SB: "Salomon", SO: "Somalie", ZA: "Afrique du Sud", SS: "Soudan du Sud", ES: "Espagne", LK: "Sri Lanka", SD: "Soudan",
  SR: "Suriname", SE: "Suède", CH: "Suisse", SY: "Syrie", TW: "Taïwan", TJ: "Tadjikistan", TZ: "Tanzanie", TH: "Thaïlande", TG: "Togo", TO: "Tonga",
  TT: "Trinité", TN: "Tunisie", TR: "Turquie", TM: "Turkménistan", TV: "Tuvalu", UG: "Ouganda", UA: "Ukraine", AE: "Émirats", GB: "Royaume-Uni",
  US: "États-Unis", UY: "Uruguay", UZ: "Ouzbékistan", VU: "Vanuatu", VA: "Vatican", VE: "Venezuela", VN: "Vietnam", YE: "Yémen", ZM: "Zambie",
  ZW: "Zimbabwe"
  };

  document.addEventListener("DOMContentLoaded", () => {
    const countryNameElement = document.getElementById("countryName");
    const movieListContainer = document.getElementById("movieList");

    const urlParams = new URLSearchParams(window.location.search);
    const countryCode = urlParams.get("country");

    if (countryCode) {
      const upperCode = countryCode.toUpperCase();

      // Affichage du nom complet si dispo, sinon le code
      if (countryNameElement) {
        countryNameElement.textContent = countryNames[upperCode] || upperCode;
      }

      fetchMoviesByCountry(upperCode, movieListContainer);
    } else {
      if (movieListContainer) {
        movieListContainer.innerHTML =
          "<p class='error-msg'>Aucun pays sélectionné. Veuillez retourner à l'accueil.</p>";
      }
    }
  });

  async function fetchMoviesByCountry(country, container) {
    if (!container) return;

    try {
      container.innerHTML = "<div class='loader'>Chargement des films...</div>";

      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&with_origin_country=${country}&sort_by=popularity.desc&page=1`;

      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`Erreur API: ${response.status}`);

      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        container.innerHTML = "<p>Aucun film trouvé pour ce pays.</p>";
        return;
      }

      displayMovies(data.results, container);
    } catch (err) {
      console.error("Erreur lors du chargement des films:", err);
      container.innerHTML = "<p>Erreur lors de la récupération des données.</p>";
    }
  }

  function displayMovies(movies, container) {
    container.innerHTML = "";

    // Création d'un fragment pour optimiser les performances du DOM
    const fragment = document.createDocumentFragment();

    movies.forEach((movie) => {
      const link = document.createElement("a");
      link.classList.add("movie-card-trie");
      link.href = `film.html?movie_id=${movie.id}`;

      const posterPath = movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : "assets/img/no_poster.png";

      const releaseYear = movie.release_date
        ? movie.release_date.split("-")[0]
        : "N/A";

      link.innerHTML = `
                <div class="card-img-container">
                    <img src="${posterPath}" alt="${movie.title}" loading="lazy">
                </div>
                <h3>${movie.title}</h3>
                <p class="movie-date">${releaseYear}</p>
            `;

      fragment.appendChild(link);
    });

    container.appendChild(fragment);
  }
})();