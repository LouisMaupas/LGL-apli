import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// translations 
const resources = {
  en: { 
    translation: {
        // HEADER
        "Library": "Library",
        "Home": "Home",
        "How_to_play": "How to play",
        "Download": "Download",
        "Profil": "Profil",
        "Logout": "Logout",
        "Login": "Login",
        "Register": "Register",
        // HOME
        "presentation_quote" : "In Duel of Reigns getting started is child's play, but mastery is the work of masters!",
        "presentation_desc": "Dive into the universe of Duel of Reigns, a strategic card game set in the heart of a heroic fantasy world. Weave strategic alliances between factions, thereby consolidating your power, to impose your indefatigable reign!",
        "play_button": "I want to play!",
        "news_new_mode": "Introduction of single-player mode",
        "news_new_mode_desc": "Because we haven't developed multiplayer yet, come test the single-player mode!",
        "see_more": "See more",
        "news_new_faction": "Introducing the new faction: the elves",
        "news_new_faction_desc": "Will you be able to rally this ancient faction to your cause? Discover the elves and their ancestral powers!",
        "news_update": "Update notes 0.0.1",
        "news_update_desc": "Ok, so we don't have much to say for now, but more is coming, you're not ready!",
        "news_esport": "eSports Scene & Tournaments",
        "news_esport_desc": "Can't get past gold rank on LOL? Become a pro player of Duel of Reigns!",
        "home.factions_title": "Factions",
        "home.factions_description": "There are several factions within Duel Reigns. Each one brings its own perspective, motivations, and unique role. These factions can form alliances or engage in epic confrontations. Here's a look at the main factions you can encounter.",
        "home.cards_title": "Cards",
        "home.cards_link": "See all cards",
        "home.cards_description": "Cards are represented by unique illustrations and come with various information such as their power, faction, and sometimes an effect. This information defines the tactical value of each card and should be taken into account when building your deck.",
        "home.cards_power": "Power",
        "home.cards_power_description": "normal / a boosted power when its faction reigns.",
        "home.cards_value_a": "A ",
        "home.cards_value_value": "value",
        "home.cards_value_description": "normal / a boosted value when its faction reigns.",
        "home.cards_effect_option": "Optionally an effect",
        "home.cards_cost_a": "A ",
        "home.cards_cost_cost": "cost",
        "home.cards_cost_description": "in gold pieces (GP), to be able to add the card to the deck.",
        // Cards
        "cards.title": "Cards library",
        "cards.text": "Coming soon: the list of all cards.",
        // Download
        "download.title": "Downloads",
        "download.text": "Click to download Duel of Reigns",
        // Profil
        "profil.title": "🫡 Hello",
        "profil.text": "For the moment, I'm a little lazy 🥱 but soon you will be able to modify your profile here 👇.",
        // Login
    }
  },
  fr: {
    translation: {
        // HEADER
        "Library": "Bibliothèque",
        "Home": "Accueil",
        "How_to_play": "Comment jouer",
        "Download": "Téléchargement",
        "Profil": "Profile",
        "Logout": "Déconnexion",
        "Login": "Connexion",
        "Register": "Inscription",
        // HOME
        "presentation_quote" : "Dans Duel of Reigns la prise en main est un jeu d'enfant, mais la maîtrise est l'œuvre des maîtres ! ",
        "presentation_desc" : "Plongez dans l'univers de Duel of Reigns, un jeu de cartes stratégique établi au cœur d'un monde héroïque-fantaisie. Tissez des alliances stratégiques entre factions, consolidant ainsi votre pouvoir, afin d'imposer votre règne indéfectible !",
        "play_button": "Je veux jouer !",
        // FIXME : this part should be send by backend / from DB
        "news_new_mode": "Présentation du mode un joueur",
        "news_new_mode_desc": "Parce qu'on a pas encore dev le multi, viens tester le mode un joueur !",
        "see_more": "Voir plus",
        "news_new_faction": "Présentation de la nouvelle faction : les elfes",
        "news_new_faction_desc": "Serez-vous capable de rallier à votre cause cette faction millénaire ? Découvrez les elfes et leurs pouvoirs ancestraux !",
        "news_update": "Notes de mise à jour 0.0.1",
        "news_update_desc": "Ok donc on n'a pas grand-chose à dire pour l'instant mais la suite arrive, vous êtes pas prêt !",
        "news_esport": "Scène eSport & tournois",
        "news_esport_desc": "Vous n'arrivez pas à dépasser le rang gold sur LOL ? Devenez joueur pro de Duel of Reigns !",
        // FIXME : end of this part
        "home.factions_title": "Factions",
        "home.factions_description": "Il existe plusieurs factions au sein de Duel Reigns.Chacune d'entre elles apporte sa propre perspective, ses motivations et son rôle unique. Ces factions peuvent former des alliances ou se lancer dans des affrontements épiques. Voici un aperçu des principales factions que vous pouvez rencontrer.",
        "home.cards_title": "Cartes",
        "home.cards_link": "Voir toutes les cartes",
        "home.cards_description": "Les cartes sont représentées par des illustrations uniques et accompagnées de diverses informations telles que sa puissance, sa faction, parfois un effet. Ces informations définissent la valeur tactique de chaque carte et sont à prendre en compte lors de la construction de son deck.",
        "home.cards_power": "Puissance",
        "home.cards_power_description": "normale / une puissance boostée quand sa faction règne.",
        "home.cards_value_a": "Une ",
        "home.cards_value_value": "valeur",
        "home.cards_value_description": "normale / une valeur boostée quand sa faction règne.",
        "home.cards_effect_option": "Facultativement un effet",
        "home.cards_cost_a": "Un ",
        "home.cards_cost_cost": "coût",
        "home.cards_cost_description": "en pièce d'or (PO), pour pouvoir ajouter la carte au deck.",
        // Cards
        "cards.title": "Bibliothèque de cartes",
        "cards.text": "Prochainement : la liste de toutes les cartes.",
        // Download
        "download.title": "Téléchargements",
        "download.text": "Cliquez pour télécharger Duel of Reigns",
        // Profil
        "profil.title": "🫡 Hello ",
        "profil.text": "Pour l'instant, j'ai un peu la flemme 🥱 mais bientôt tu pourras modifier ton profil ici 👇.",
        // Login

    }
  }
};

i18n
  .use(initReactI18next) //  pass the i18n module to the react-i18next extension
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false // Already reacts by saving escape values.
    }
  });

export default i18n;
