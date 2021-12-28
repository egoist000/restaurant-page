const SUSHI_MENU = {
    menuItems: [
      {
        imgsrc: "./imgs/maguro-nigiri.jpg",
        alt: "maguro-nigiri",
        name: "Maguro nigiri",
        description: "Lean tuna sushi"
      },
      {
        imgsrc: "./imgs/ika-nigiri.jpg",
        alt: "ika-nigiri",
        name: "Ika nigiri",
        description: "Squid sushi"
      },
      {
        imgsrc: "./imgs/salmon-roe.jpg",
        alt: "salmon-roe",
        name: "Salmon roe",
        description: "Salmon eggs"
      },
      {
        imgsrc: "./imgs/saba.jpg",
        alt: "saba",
        name: "Saba",
        description: "Mackerel"
      },
      {
        imgsrc: "./imgs/toro.jpg",
        alt: "toro",
        name: "Toro",
        description: "Fatty bluefin tuna"
      },
      {
        imgsrc: "./imgs/uni.jpg",
        alt: "uni",
        name: "Uni",
        description: "Sea urchin gonads"
      },
      {
        imgsrc: "./imgs/akami.jpg",
        alt: "akami",
        name: "Akami",
        description: "Bluefin tuna loin"
      },
      {
        imgsrc: "./imgs/iwashi.jpg",
        alt: "iwashi",
        name: "Iwashi",
        description: "Sardine"
      },
      {
        imgsrc: "./imgs/amaebi.jpg",
        alt: "amaebi",
        name: "Amaebi",
        description: "Raw sweet shrimp"
      },
      {
        imgsrc: "./imgs/ebi-nigiri.jpg",
        alt: "ebi-nigiri",
        name: "Ebi nigiri",
        description: "Broiled shrimp"
      },
      {
        imgsrc: "./imgs/akagai.jpg",
        alt: "akagai",
        name: "Akagai",
        description: "Ark shell"
      },
      {
        imgsrc: "./imgs/tako.jpg",
        alt: "tako",
        name: "Tako",
        description: "Octopus"
      }
    ]
};

export default function getItems() {
    return SUSHI_MENU.menuItems;
}