const countriesWithCodes = [
  { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" }, { name: "Antigua and Barbuda", code: "AG" }, { name: "Argentina", code: "AR" }, { name: "Armenia", code: "AM" },
  { name: "Australia", code: "AU" }, { name: "Austria", code: "AT" }, { name: "Azerbaijan", code: "AZ" }, { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" }, { name: "Bangladesh", code: "BD" }, { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" }, { name: "Belize", code: "BZ" }, { name: "Benin", code: "BJ" }, { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" }, { name: "Bosnia and Herzegovina", code: "BA" }, { name: "Botswana", code: "BW" }, { name: "Brazil", code: "BR" },
  { name: "Brunei", code: "BN" }, { name: "Bulgaria", code: "BG" }, { name: "Burkina Faso", code: "BF" }, { name: "Burundi", code: "BI" },
  { name: "Cape Verde", code: "CV" }, { name: "Cambodia", code: "KH" }, { name: "Cameroon", code: "CM" }, { name: "Canada", code: "CA" },
  { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" }, { name: "Chile", code: "CL" }, { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" }, { name: "Comoros", code: "KM" }, { name: "Congo", code: "CG" }, { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" }, { name: "Cyprus", code: "CY" }, { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" }, { name: "Djibouti", code: "DJ" }, { name: "Dominica", code: "DM" }, { name: "Dominican Republic", code: "DO" },
  { name: "East Timor", code: "TL" }, { name: "Ecuador", code: "EC" }, { name: "Egypt", code: "EG" }, { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" }, { name: "Eritrea", code: "ER" }, { name: "Estonia", code: "EE" }, { name: "Eswatini", code: "SZ" },
  { name: "Ethiopia", code: "ET" }, { name: "Fiji", code: "FJ" }, { name: "Finland", code: "FI" }, { name: "France", code: "FR" },
  { name: "Gabon", code: "GA" }, { name: "Gambia", code: "GM" }, { name: "Georgia", code: "GE" }, { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" }, { name: "Greece", code: "GR" }, { name: "Grenada", code: "GD" }, { name: "Guatemala", code: "GT" },
  { name: "Guinea", code: "GN" }, { name: "Guinea-Bissau", code: "GW" }, { name: "Guyana", code: "GY" }, { name: "Haiti", code: "HT" },
  { name: "Honduras", code: "HN" }, { name: "Hungary", code: "HU" }, { name: "Iceland", code: "IS" }, { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" }, { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" }, { name: "Italy", code: "IT" }, { name: "Jamaica", code: "JM" }, { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" }, { name: "Kazakhstan", code: "KZ" }, { name: "Kenya", code: "KE" }, { name: "Kiribati", code: "KI" },
  { name: "North Korea", code: "KP" }, { name: "South Korea", code: "KR" }, { name: "Kuwait", code: "KW" }, { name: "Kyrgyzstan", code: "KG" },
  { name: "Laos", code: "LA" }, { name: "Latvia", code: "LV" }, { name: "Lebanon", code: "LB" }, { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" }, { name: "Liechtenstein", code: "LI" }, { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" }, { name: "Madagascar", code: "MG" }, { name: "Malawi", code: "MW" }, { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" }, { name: "Mali", code: "ML" }, { name: "Malta", code: "MT" }, { name: "Marshall Islands", code: "MH" },
  { name: "Mauritania", code: "MR" }, { name: "Mauritius", code: "MU" }, { name: "Mexico", code: "MX" }, { name: "Micronesia", code: "FM" },
  { name: "Moldova", code: "MD" }, { name: "Monaco", code: "MC" }, { name: "Mongolia", code: "MN" }, { name: "Montenegro", code: "ME" },
  { name: "Morocco", code: "MA" }, { name: "Mozambique", code: "MZ" }, { name: "Myanmar", code: "MM" }, { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" }, { name: "Nepal", code: "NP" }, { name: "Netherlands", code: "NL" }, { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" }, { name: "Niger", code: "NE" }, { name: "Nigeria", code: "NG" }, { name: "North Macedonia", code: "MK" },
  { name: "Norway", code: "NO" }, { name: "Oman", code: "OM" }, { name: "Pakistan", code: "PK" }, { name: "Palau", code: "PW" },
  { name: "Panama", code: "PA" }, { name: "Papua New Guinea", code: "PG" }, { name: "Paraguay", code: "PY" }, { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" }, { name: "Poland", code: "PL" }, { name: "Portugal", code: "PT" }, { name: "Qatar", code: "QA" },
  { name: "Romania", code: "RO" }, { name: "Russia", code: "RU" }, { name: "Rwanda", code: "RW" }, { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" }, { name: "Saint Vincent and the Grenadines", code: "VC" }, { name: "Samoa", code: "WS" }, { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" }, { name: "Saudi Arabia", code: "SA" }, { name: "Senegal", code: "SN" }, { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" }, { name: "Sierra Leone", code: "SL" }, { name: "Singapore", code: "SG" }, { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" }, { name: "Solomon Islands", code: "SB" }, { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" },
  { name: "South Sudan", code: "SS" }, { name: "Spain", code: "ES" }, { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" }, { name: "Sweden", code: "SE" }, { name: "Switzerland", code: "CH" }, { name: "Syria", code: "SY" },
  { name: "Taiwan", code: "TW" }, { name: "Tajikistan", code: "TJ" }, { name: "Tanzania", code: "TZ" }, { name: "Thailand", code: "TH" },
  { name: "Togo", code: "TG" }, { name: "Tonga", code: "TO" }, { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" }, { name: "Turkmenistan", code: "TM" }, { name: "Tuvalu", code: "TV" }, { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" }, { name: "United Arab Emirates", code: "AE" }, { name: "United Kingdom", code: "GB" }, { name: "United States", code: "US" },
  { name: "Uruguay", code: "UY" }, { name: "Uzbekistan", code: "UZ" }, { name: "Vanuatu", code: "VU" }, { name: "Vatican City", code: "VA" },
  { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" }, { name: "Yemen", code: "YE" }, { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

// --- Données et Config ---
const API_KEY = "78434ed93fa13a8f66de4786b1ca2a32";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

const unCountries = countriesWithCodes.map((c) => c.name);

// Icône de drapeau réutilisable
const flagIconConfig = {
    iconSize: [30, 20],
    iconAnchor: [15, 10],
    className: "custom-flag",
};

// --- Initialisation de la carte ---
const southWest = L.latLng(-85, -180);
const northEast = L.latLng(85, 180);
const bounds = L.latLngBounds(southWest, northEast);

const map = L.map("map", {
    minZoom: 3,
    maxZoom: 7,
    zoomControl: false,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
}).setView([20, 0], 2);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
    noWrap: true,
    bounds: bounds,
}).addTo(map);

// --- Fonction de Récupération---
async function fetchCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,latlng,flags");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const countries = await response.json();

        countries.forEach((country) => {
            const countryName = country.name.common;
            if (unCountries.includes(countryName)) {
                const coordinates = country.latlng;
                const flagUrl = country.flags?.png;

                if (coordinates?.length === 2 && flagUrl) {
                    const marker = L.marker(coordinates, { 
                        icon: L.icon({ ...flagIconConfig, iconUrl: flagUrl }) 
                    }).addTo(map);

                    marker.bindTooltip(`<strong>${countryName}</strong>`, {
                        direction: "top",
                        offset: [0, -10],
                    });

                    marker.on("click", () => {
                        const data = countriesWithCodes.find((c) => c.name === countryName);
                        if (data) window.location.href = `filmTrie.html?country=${data.code}`;
                    });

                    // Effets de survol
                    marker.on("mouseover", function () {
                        const el = this.getElement();
                        if(el) {
                            el.style.transition = "transform 0.2s";
                            el.style.transform += " scale(1.2)";
                        }
                    });
                    marker.on("mouseout", function () {
                        const el = this.getElement();
                        if(el) el.style.transform = el.style.transform.replace(" scale(1.2)", "");
                    });
                }
            }
        });
    } catch (error) {
        console.error("Erreur carte :", error);
    }
}

/* Fonction générique pour charger des films */
async function loadMovies(endpoint, trackSelector, itemClass) {
    try {
        const response = await fetch(`${BASE_URL}/movie/${endpoint}?api_key=${API_KEY}&language=fr-FR&page=1`);
        const data = await response.json();
        renderCarousel(data.results, trackSelector, itemClass);
    } catch (error) {
        console.error(`Erreur chargement ${endpoint}:`, error);
    }
}

/* Affiche les films dans le DOM */
function renderCarousel(movies, trackSelector, itemClass) {
    const track = document.querySelector(trackSelector);
    if (!track) return;

    track.innerHTML = movies.map((movie, index) => {
        if (!movie.poster_path) return "";
        
        const isPriority = (trackSelector === ".carousel-track" && index < 4);
        const loadingAttr = isPriority ? 'eager' : 'lazy';
        const fetchPriority = isPriority ? 'fetchpriority="high"' : '';

        return `
            <div class="${itemClass}">
                <a href="film.html?movie_id=${movie.id}" style="text-decoration:none; color:inherit;">
                    <img src="${IMAGE_BASE_URL}${movie.poster_path}" 
                         alt="${movie.title}" 
                         width="300" height="450"
                         loading="${loadingAttr}"
                         ${fetchPriority}>
                    <h3>${movie.title}</h3>
                </a>
            </div>`;
    }).join('');
}

// --- Nav et Elements ---

function setupCarouselNavigation(btnPrev, btnNext, carouselSelector) {
    const p = document.querySelector(btnPrev),
          n = document.querySelector(btnNext),
          c = document.querySelector(carouselSelector);
    if (p && n && c) {
        p.onclick = () => c.scrollBy({ left: -300, behavior: "smooth" });
        n.onclick = () => c.scrollBy({ left: 300, behavior: "smooth" });
    }
}

// Lancement au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    // Charge la carte
    fetchCountries();

    // Charger tous les carrousels
    Promise.all([
        loadMovies("now_playing", ".carousel-track", "carousel-item"),
        loadMovies("upcoming", ".carousel-track2", "carousel-item2"),
        loadMovies("top_rated", ".carousel-track3", "carousel-item3")
    ]);

    // Setup Navigation
    setupCarouselNavigation(".carousel-btn-prev", ".carousel-btn-next", ".carousel");
    setupCarouselNavigation(".carousel-btn-prev2", ".carousel-btn-next2", ".carousel2");
    setupCarouselNavigation(".carousel-btn-prev3", ".carousel-btn-next3", ".carousel3");

    // Recherche
    const searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.onsubmit = (e) => {
            e.preventDefault();
            const query = document.getElementById("searchInput")?.value.trim();
            if (query) window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        };
    }
});