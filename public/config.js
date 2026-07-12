/**
 * AniStream — Configuration des API côté navigateur.
 *
 * L'app est 100% HTML/JS pur : le navigateur ne peut pas lire `.env`.
 * Recopiez ici les valeurs de votre fichier `.env` local.
 * Ce fichier est chargé par `public/app.html` avant le script principal
 * et expose `window.ANISTREAM_CONFIG`.
 */
window.ANISTREAM_CONFIG = {
  JIKAN_BASE_URL: "https://api.jikan.moe/v4",
  WAIFU_BASE_URL: "https://api.waifu.pics/sfw/waifu",
  ANIMECHAN_BASE_URL: "https://animechan.io/api/v1",
  ANIME_API_KEY: "", // laissez vide si non requis
};
