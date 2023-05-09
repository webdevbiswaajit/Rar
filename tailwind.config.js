/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "services.html",
    "serviceDetails.html",
    "contact.html",
    "blog.html",
  ],
  theme: {
    fontFamily: {
      Roboto: ["'Roboto', sans-serif"],
    },
    extend: {
      colors: {
        "Ripe-Mango": "#FEBB24",
        "Medium-Purple": "#A079EC",
        "Light-Tangelo": "#FFA873",
        "Ocean-Green": "#46BD9F",
        "Tart-Orange": "#FF4848",
        "Royal-Blue": "#4370E4",
        "Green-Pantone": "#15AC49",
        "Cultured-Ash": "#F3F7F5",
        "Raisin-Black": "#202020",
        "Light-Red": "#EB2027",
        "Ash-Red": "#FDE9E9",
        "Bright-Gray": "#F2F1EB",
        "Icon-Back": " rgba(235, 32, 39, 0.1)",
      },
      shadow: {
        "global-shaow": "0px 3px 10px rgba(0, 0, 0, 0.2);",
      },
      spacing: {
        70: "70px",
      },
      fontSize: {
        40: "40px",
      },
      lineHeight: {
        50: "50px",
      },
    },
  },
  plugins: [],
};
