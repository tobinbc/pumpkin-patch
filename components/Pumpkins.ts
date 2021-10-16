const makeImageUrl = (name: string) => `/image/${name}.png`;

export type Pumpkin = {
  url: string;
  name: string;
  goodFor: string[];
  size: "tiny" | "small" | "medium" | "large" | "gigantic";
  order: number;
  eatability: string;
};
const pumpkins: Pumpkin[] = [
  {
    url: makeImageUrl("casperita-pumpkin"),
    goodFor: ["Display", "Eating", "👻"],
    size: "small",
    order: 5,
    name: "Casperita",
    eatability: "OK, not much flesh",
  },
  {
    url: makeImageUrl("unknown-magic-pumpkin"),
    goodFor: ["Please let us know", "It just grew"],
    name: "Unknown Magic Pumpkin",
    order: 170,
    size: "medium",
    eatability: "Decent",
  },
  {
    url: makeImageUrl("uchiki-kuri-pumpkin"),
    goodFor: ["Looks kind of neat"],
    name: "Uchiki Kuri",
    order: 160,
    size: "medium",
    eatability: "Far too pretty",
  },
  {
    url: makeImageUrl("table-king-pumpkin-slim"),
    name: "Table King",
    goodFor: ["Roasting", "Soup", "Display"],
    order: 150,
    size: "small",
    eatability: "The clue is in the name",
  },
  {
    url: makeImageUrl("spaghetti-squash"),
    name: "Spaghetti Squash",
    size: "large",
    goodFor: ["Roasting", "Eating"],
    order: 140,
    eatability: "Literally in the name",
  },
  {
    url: makeImageUrl("polar-bear-pumpkin"),
    name: "Polar Bear",
    size: "gigantic",
    order: 130,
    goodFor: ["Carving", "Painting"],
    eatability: "Feeds 30 people",
  },
  {
    url: makeImageUrl("muscade-de-provence-pumpkin"),
    name: "Muscade De Provence",
    size: "large",
    goodFor: ["Heritage Variety", "Looks really cool"],
    order: 120,
    eatability: "Traditional deliciousness",
  },
  {
    url: makeImageUrl("marrow-courgette"),
    name: "Marrow Courgette looking thing",
    goodFor: ["Eating", "Roasting"],
    order: 110,
    size: "large",
    eatability: "Normal",
  },
  {
    url: makeImageUrl("marina-di-chioggia-pumpkin"),
    name: "Marina Di Chioggia",
    goodFor: ["Looking funky", "Carving"],
    order: 100,
    size: "large",
    eatability: "Not sure yet",
  },
  {
    url: makeImageUrl("knuckle-head-pumpkin"),
    name: "Knuckle Head",
    goodFor: ["Looking funky", "Carving"],
    order: 90,
    size: "large",
    eatability: "Average pumpkin",
  },
  {
    url: makeImageUrl("jumbo-pink-banana-pumpkin"),
    goodFor: ["Making dad jokes"],
    size: "gigantic",
    order: 80,
    name: "Jumbo Pink Banana 🍌",
    eatability: "Not a banana",
  },
  {
    url: makeImageUrl("jill-be-little-pumpkin"),
    name: "Jill Be Little",
    goodFor: ["Lookin really cute 😇"],
    size: "tiny",
    order: 70,
    eatability: "Not getting much out of this",
  },
  {
    url: makeImageUrl("jack-o-lantern-pumpkin"),
    name: "Jack O'Lantern",
    goodFor: ["Trick or Treat 🎃"],
    size: "large",
    order: 60,
    eatability: "🎃",
  },
  {
    url: makeImageUrl("harvest-moon-pumpkin"),
    name: "Harvest Moon",
    goodFor: ["Being really really good looking"],
    size: "medium",
    order: 50,
    eatability: "Smaller but tastier",
  },
  {
    url: makeImageUrl("crown-prince-pumpkin"),
    name: "Crown Prince 👑",
    goodFor: ["Eating", "Soups ", "Roasting", "Being Delicious"],
    size: "medium",
    order: 0,
    eatability: "Thick nutty flesh, few seeds, delicious.",
  },
  {
    url: makeImageUrl("harlequin-pumpkin"),
    name: "Harlequin",
    goodFor: ["Decoration"],
    size: "small",
    order: 10,
    eatability: "Nutty and tasty but smaller.",
  },
  {
    url: makeImageUrl("atlantic-giant-pumpkin"),
    size: "gigantic",
    name: "Atlantic Giant",
    goodFor: ["Carving", "Display", "Footstool"],
    order: 20,
    eatability: "Less flavour as it's so large",
  },
  {
    url: makeImageUrl("butternut-hunter"),
    size: "small",
    name: "Butternut Hunter",
    goodFor: ["Cooking"],
    order: 30,
    eatability:'Delicious butternutty'
  },
];

export default pumpkins.sort((a, b) => a.order - b.order);
