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
        // CARDS
        "cards.title": "Cards library",
        "cards.text": "Coming soon: the list of all cards.",
        // DOWNLOAD
        "download.title": "Downloads",
        "download.text": "Click to download Duel of Reigns",
        // PROFIL
        "profil.title": "🫡 Hello",
        "profil.text": "For the moment, I'm a little lazy 🥱 but soon you will be able to modify your profile here 👇.",
        // LOGIN
        "login.connexion.error": "Error while connecting",
        "login.from.text": "You must log in to access the page",
        "login.form.email": "email",
        "login.form.password": "Password",
        "login.form.submit": "Login",
        // REGISTER
        "register.form.error": "Please enter a valid email address.",
        "register.form.error.passwordsDontMatch": "Passwords do not match.",
        "register.form.error.displayName": "Error updating displayName.",
        "register.form.success": "Your account has been successfully created.",
        "register.form.title": "Registration",
        "register.form.email": "email address",
        "register.form.password": "password",
        "register.form.confirmPassword": "confirm password",
        "register.form.pseudo": "username",
        "register.form.send": "Sign up",
        // HOW TO PLAY
        "howToPlay": {
            "description": "Duel of Reigns is a strategic card game played in two rounds. Each round consists of 12 duels, where two players face off by playing cards. The goal is to earn as many points as possible to become the winner of the game. Each player builds a deck of 24 cards, composed of 6 cards from 4 different factions. Each card has a power and a value, normal or boosted when played during its reign. The cards belong to different factions such as humans, elves, orcs, and demons. During a duel, players take turns playing a card. The card with the highest power wins the trick, and the values of both cards are added to the winner's score. Duels follow a specific sequence, including activation, play, combat, and scoring phases. Players have gold coins (Po) that they can spend to include cards in their deck. Each player starts with 240 Po. The cost of cards must be managed to build a balanced and efficient deck. The game also features special effects and specific cases that can influence the course of duels and rounds. At the end of the two rounds, the player with the highest score wins the game. It is a strategic game where deck composition, resource management, and tactical decision-making are essential to achieve victory.",
            "rules": "Rules",
            "general": "General",
            "Rules": "Terms:",
            "game": "Game = the combination of 2 rounds.",
            "round": "Round = 12 duels.",
            "duel": "Duel: see duel sequence.",
            "power.desc": "Power = the value that determines which card wins the duel.",
            "value": "Value = the number of points that will be added to the winner's score in the duel.",
            "cost": "Cost: the number of gold coins to spend to include the card in one's deck.",
            "goldCoin": "Gold Coin (Po): currency used to buy cards and include them in the deck. Each player has 240 Po.",
            "effect": "Effect: see the google forms excel.",
            "factions": "Factions",
            "factionsDescription": "There are several factions:",
            "cards": "Cards",
            "viewAllCards": "View all cards",
            "cardsInfo": "Information about the cards:",
            "power": "Power",
            "normalValue": "Normal power / boosted power when its faction reigns.",
            "boostedValue": "Normal value / boosted value when its faction reigns.",
            "optionalEffect": "Optionally, an effect.",
            "goldCost": "A cost in gold coins.",
            "deck": "Deck",
            "deckDescription": "A deck:",
            "deckComposition": "Consists of 6 cards from 4 different factions (24 cards in total).",
            "deckCostLimit": "Must cost a total of less than 240 Po.",
            "cardDuplicates": "It is possible to have cards in 2 copies (depending on rarity)."
        },
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
        // CARDS
        "cards.title": "Bibliothèque de cartes",
        "cards.text": "Prochainement : la liste de toutes les cartes.",
        // DOWNLOAD
        "download.title": "Téléchargements",
        "download.text": "Cliquez pour télécharger Duel of Reigns",
        // PROFIL
        "profil.title": "🫡 Hello ",
        "profil.text": "Pour l'instant, j'ai un peu la flemme 🥱 mais bientôt tu pourras modifier ton profil ici 👇.",
        // LOGIN
        "login.connexion.error": "Erreur lors de la connexion",
        "login.from.text": "Vous devez vous connecter pour accéder à la page",
        "login.form.email": "email",
        "login.form.password": "Mot de passe",
        "login.form.submit": "Se connecter",
        // REGISTER
        "register.form.error": "Veuillez entrer une adresse e-mail valide.",
        "register.form.error.passwordsDontMatch": "Les mots de passe ne correspondent pas.",
        "register.form.error.displayName": "Erreur lors de la mise à jour du displayName",
        "register.form.success": "Votre compte a bien été créé.",
        "register.form.title": "Inscription",
        "register.form.email": "adresse email",
        "register.form.password": "mot de passe",
        "register.form.confirmPassword": "confirmation du mot de passe",
        "register.form.pseudo": "pseudo",
        "register.form.send": "S'inscrire",
        // HOW TO PLAY
        "howToPlay": {
            // "description": "Duel of Reigns est un jeu de cartes stratégique se déroulant en deux manches. Chaque manche est composée de 12 duels, où deux joueurs s'affrontent en posant des cartes. Le but est de remporter le plus de points possible pour devenir le gagnant de la partie.",
            "description" : {
                "term1": "Duel of Reigns est un jeu de cartes stratégique se déroulant en deux manches. Chaque manche est composée de 12 duels, où deux joueurs s'affrontent en posant des cartes. Le but est de remporter le plus de points possible pour devenir le gagnant de la partie.",
                "term2": "Chaque joueur constitue un",
                "term3": "deck",
                "term4": "de 24 cartes, composé de 6 cartes de 4",
                "term5": "factions",
                "term6": "différentes. Chaque carte a une",
                "term7": "puissance",
                "term8": "et une",
                "term9": "valeur",
                "term10": " normale ou boostée lorsqu'elle est jouée pendant son règne. Les cartes appartiennent à différentes factions telles que les humains, les elfes, les orcs et les démons. Lors d'un duel, les joueurs posent une carte à tour de rôle. La carte avec la puissance la plus élevée remporte le pli, et les valeurs des deux cartes sont ajoutées au score du gagnant. Les duels se déroulent en suivant un déroulement précis, avec des phases d'activation, de pose, de combat et de score. Les joueurs disposent de",
                "term11": "pièces d'or (Po)",
                "term12": "qu'ils peuvent dépenser pour inclure des cartes dans leur deck. Chaque joueur commence avec 240 Po. Le coût des cartes doit être géré pour construire un deck équilibré et efficace. Le jeu propose également des éléments tels que des effets spéciaux et des cas particuliers qui peuvent influencer le déroulement des duels et des manches. À la fin des deux manches, le joueur ayant obtenu le score le plus élevé remporte la partie. C'est un jeu stratégique où la composition du deck, la gestion des ressources et la prise de décision tactique sont essentielles pour atteindre la victoire.",
                "term13": "",
                "term14": "",
                "term15": "",
                "term16": "",
                "term17": "",
            },
            "rules": "Rules",
            "general": "General",
            "Rules": "Terms:",
            "game": "Partie = l'ensemble des 2 manches.",
            "round": "Manche = 12 duels.",
            "duel": "Duel : voir déroulement d'un duel.",
            "power.desc": "Puissance = la valeur qui détermine quelle carte gagne le duel.",
            "value": "Valeur",
            "valueDesc": " = nombre de points qui seront ajoutés au score du gagnant du duel.",
            "cost": "Coût : le nombre de pièces d'or à dépenser pour inclure la carte à son deck.",
            "goldCoin": "Pièce d'or (Po)",
            "goldCoin.desc": " : monnaie permettant d'acheter des cartes pour les inclure dans son deck. Chaque joueur possède 240 Po.",
            "effect": "Effet : voir le google forms excel.",
            "factions": "Factions",
            "factionsDescription": "Il existe plusieurs factions :",
            "cards": "Cartes",
            "cards.link": "Voir toutes les cartes",
            "cards.info": "Les informations concernant les cartes :",
            "power": "Une puissance normale / une puissance boostée quand sa faction règne.",
            "normalValue": "Une valeur normale / une valeur boostée quand sa faction règne.",
            "optionalEffect": "Facultativement un effet.",
            "goldCost": "Un coût en pièce d'or.",
            "deck": "Deck",
            "deckDescription": "Un deck :",
            "deckComposition": "Est constitué de 6 cartes de 4 factions différentes (24 cartes au total).",
            "deckCostLimit": "Doit coûter au total moins de 240 po.",
            "cardDuplicates": "Il est possible d'avoir des cartes en 2 exemplaires (selon la rareté)."
          }
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
