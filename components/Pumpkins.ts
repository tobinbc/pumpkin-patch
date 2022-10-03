const makeImageUrl = (name: string) =>
  `/image/${encodeURIComponent(name)}.jpeg`;
export type Pumpkin = {
  image: string;
  description: string;
  type: string;
  variety: string;
};

const pumpkins: Pumpkin[] = [
  {
    type: "Pumpkin",
    variety: "Jack O' Lantern 🎃",
    image: "Jack OLantern",

    description:
      "Probably the best all-rounder pumpkin both for carving and eating, producing beautiful orange skin fruits and a sweet flavoured yellow orange coloured flesh.  Size averages 20-30cm in diameter and 5 – 7kg in weight.",
  },
  {
    type: "Pumpkin",
    variety: "Big Max",
    image: "Big Max",
    description:
      "The pumpkin of choice for large Halloween Jack – O – Lanterns producing smooth light orange skinned fruits splashed with pink up to 100lb and 70inches in diameter, if restricted to single fruits and provided with ample moisture.",
  },
  {
    type: "Pumpkin",
    variety: "Polar Bear",
    image: "Polar Bear",
    description:
      "An extra-large white pumpkin, with fruit typically over 15Kg in size. Good white colour that is retained well after harvest. Vine habit. Upright shape to ribbed fruit. Best grown with one fruit per plant.",
  },
  {
    type: "Pumpkin",
    variety: "Dill's Atlantic Giant",
    image: "Atlantic Giant",

    description:
      "The ultimate variety for giant pumpkin contests holding the world record at 1689lb. It requires plenty of space and a warm long summer to reach its full potential, but with care produces exceptional sized pumpkins.",
  },
  {
    type: "Pumpkin",
    variety: "Knuckle Head",
    image: "Knucklehead",
    description:
      "An excellent Halloween hybrid variety, with distinctive warts for added effect. Medium vigour vine. Fruit size 5-7Kg; typically 30cm tall by 25cm wide. Matures from dark green to deep orange. Ideal for both carving and culinary uses.",
  },
  {
    type: "Pumpkin",
    variety: "Jill Be Little 😇",
    image: "Jill Be Little",
    description:
      "A high yielding variety that produces wide, flattened, ribbed fruits, with an attractive orange colour. Fruits typically 200-250 grams in size.",
  },
  {
    type: "Pumpkin",
    variety: "Jack Be Little",
    image: "Jack Be Little",
    description:
      "A unique truly miniature pumpkin variety producing tiny 4 inch orange fruits, with about 20 fruits per vine. Ideal for Halloween decorations.",
  },
  {
    type: "Pumpkin",
    variety: "Casperita",
    image: "Casperita",
    description:
      "A hybrid 'Munchkin' type producing small, white pumpkins, typically 750 grams in size. Fruits feature excellent skin finish and strong handles. Fruit diameter 12-14cm in size.",
  },
  {
    type: "Pumpkin",
    variety: "White Baby Boo",
    image: "Baby Boo",
    description:
      "Baby Boo Pumpkin produces charming bright all-white miniature fruits, 3 in. wide, on trailing vines, averaging 10 fruits per plant. Miniature variety that is popular with children for Halloween and Xmas decorations and its white flesh can be used for cooking.",
  },
  {
    type: "Pumpkin",
    variety: "Harvest Moon",
    image: "Harvest Moon",

    description:
      "An early maturing and compact plant that produces fruits typically 4-5Kg in size. Flat globe shape with strong handles and attractive colour. Ideal for making Halloween lanterns.",
  },
  {
    type: "Pumpkin",
    variety: "Howden",
    image: "Howden",
    description:
      "The standard variety to grow for Halloween, which reliably produces a large crop of uniform and symmetrical rich orange pumpkins with a thick flesh ideal for carving. Each pumpkin reaches up to 15 to 20 pounds and features a very thick, strong vine to provide a nice handle-like stem to hold onto while carving the pumpkins.",
  },
  {
    type: "Squash",
    variety: "Crown Prince 👑",
    image: "Crown Prince",

    description:
      "Steel blue-grey skinned winter squash with bright orange dense flesh and a sweet nutty flavour, averaging 3-4kg (6.5-9lb) in weight. Also known as “Sweet Meat” squash it is regarded as one of the best for roasting and soups alike.",
  },
  {
    type: "Squash",
    variety: "Spaghetti",
    image: "Spaghetti Squash",
    description:
      "A real novelty fruiting squash, growing on small to medium sized trailing vines, which produce numerous pale yellow oblong fruits of 8-10 Inches. Boil or roast the fruit whole for 20-30 minutes, remove the seeds, then fork out the spaghetti like flesh in long strands, serve with a sauce or season to taste, delicious.",
  },
  {
    type: "Squash",
    variety: "Baby Spaghetti",
    image: "Baby Spaghetti Squash",
    description:
      "An early maturing mini spaghetti squash variety with a semi-vigorous plant habit. It matures around 2 weeks earlier than standard larger varieties. The fruits are uniform egg shaped 400-600 gram each yielding 15-20 per plant",
  },
  {
    type: "Squash",
    variety: "Early Yellow Bush Scallop / Patty Pan",
    image: "Early Yellow Bush Scallop%2FPatty Pan",
    description:
      "A massively productive bright yellow summer squash variety producing an abundance of bright yellow, scalloped edged, tender ‘patty pan’ type squash.",
  },
  {
    type: "Squash",
    variety: "Harlequin",
    image: "Harlequin",
    description:
      "Harlequin is a great new, green striped, acorn shaped hybrid winter squash producing 1lb fruits in abundance on sturdy bush type plants. Excellent flavour and sweet flesh.",
  },
  {
    type: "Squash",
    variety: "Muscade De Provence",
    image: "Muscade De Provence",
    description:
      "An Heirloom variety from Southern France producing large flat heavily lobed fruits (8kg) that ripen to a rich brown in 120 days. The flesh is deep orange, heavy with fine sweet flavour.",
  },
  {
    type: "Squash",
    variety: "Marina Di Chioggia (Italian Winter Squash)",
    image: "Marina Di Chioggia",
    description:
      "Large unique turban shaped deep blue-green 6-10lb fruit are produced on vigorous vines with a rich, sweet, deep yellow-orange flesh of outstanding quality.",
  },
  {
    type: "Squash",
    variety: "Uchiki Kuri",
    description:
      "A bright and colourful Japanese Hubbard-type squash that has very attractive orange-red skin",
    image: "Uchiki Kuri",
  },
  {
    type: "Squash",
    variety: "Table King / Acorn Squash",
    image: "Table King%2FAcorn Squash",
    description:
      "Table King is an outstanding winter acorn squash and one of the earliest of the acorn varieties. Vigorous, semi-bush vines produce handsome, dark green acorn squash fruits in abundance . High quality, fibreless orange flesh is thick and flavourful.",
  },
  {
    type: "Squash",
    variety: "Butternut Hunter",
    image: "Butternut Hunter",
    description:
      "Bred specifically for the UK / Northern European climate this variety delivers outstanding crops over a variety of UK summer conditions.",
  },
  {
    type: "Squash",
    variety: "Jumbo Pink Banana 🍌",
    image: "Jumbo Pink Banana",

    description:
      "Large, pink banana-shaped fruit. Are produced in abundance and average 15-20lb but can easily grow to 50-60lb (4ft long) during good summers with care. The fruits are fine flavoured, dry with sweet orange flesh and store well in a cool frost free location.",
  },
  {
    type: "Squash",
    variety: "Butternut Waltham",
    image: "Butternut Waltham",
    description:
      "This fine Butternut type is by far the most popular and widely grown winter squash. Light tan-coloured with small seed cavities and thick, cylindrical necks without crooks, it yields heavily showing remarkable uniformity with fruits avg. 9? long, avg. 4-5 lb. The flesh colour is richer than others, is smooth-textured and has a unique sweet flavour, particularly after 2 months storage. This is deservedly the most widely grown full-size butternut",
  },
  {
    type: "Squash",
    variety: "Delicata",
    image: "Delicata",
    description:
      "If you have never eaten a Delicata squash, this is the one to grow. The vivid orange flesh colour indicates it is rich in Vitamin A. The sweet flesh is fine textured without coarse strings, butter and brown sugar are optional when eating because it is so sweet.",
  },
  {
    type: "Squash",
    variety: "Delicata Honeyboat",
    image: "Delicata Honeyboat",
    description:
      "A real improvement on the standard delicate producing heavy crops of what must be one of the sweetest squashes available. The fruits are super sweet with firm, deep orange flesh ideal for roasting or soup.",
  },
  {
    type: "Squash",
    variety: "Queensland Blue",

    image: "Queensland Blue",
    description:
      "An Australian Heirloom variety, producing vigorous trailing vines with 3-5kg deeply ribbed attractive steel blue fruits.  The bright orange flesh is sweet with almost treacle like hint when roasted and the fruits store extremely well for 4-5 months in cool, dark and dry conditions.",
  },
  {
    type: "Squash",
    variety: "Festival",
    image: "Festival",
    description:
      "A small-fruited very attractive squash, with a marbled colourful outer skin containing a sweet, nutty flavoured, pale orange flesh. The medium sized trailing vines produce numerous fruits of about 1lb, which store extremely well into spring.",
  },
  {
    type: "Squash",
    variety: "Galeux D’Eysines",
    image: "Galeux DEysines",
    description:
      "A beautiful, unique coloured and rare old French Heirloom squash variety, producing flattened, round 10-15 lb fruit with a gorgeous salmon-peach coloured skin that is covered with warts as the fruit matures. The vines are medium sized, vigorous and set lots of pale yellow fruits which only obtain their stunning colour when fully mature. In France the sweet orange flesh is used in soups and also can be baked. Stores well.",
  },
  {
    type: "Squash",
    variety: "Strawberry Crown",
    image: "Strawberry Crown",
    description:
      "A productive vining winter squash originating from Brazil producing 4-6 fruits per vine averaging 3kg per fruit. The squash have a round, ribbed, slightly flattened shape with a grey-brown colour maturing with a salmon / strawberry tinge in autumn. The flavour is rich, the texture is smooth, not stringy at all like some squash.",
  },
  {
    type: "Squash",
    variety: "Sunshine Squash",
    image: "Sunshine Squash",
    description:
      "Bright red skinned winter ‘Kabocha’ type 3lb fruits with sweet, nutty orange flesh are borne on medium to small semi-bush plants.",
  },
  {
    type: "Squash",
    variety: "Summer Squash Early White Bush Scallop",
    image: "Early White Bush Scallop",
    description:
      "A prolific variety, scallop-edged and flattened, this patty-pan variety is sweet, nutty and white-fleshed. Compact bush-type plant is ideal when space is a factor.",
  },
  {
    type: "Gourd",
    variety: "Turks Turban",
    image: "Turks Turban",
    description:
      "Plant produces high yields of 10? bright orange squash type gourds with red, white, and dark green markings.",
  },
];

export default pumpkins.map((pumpkin) => ({
  ...pumpkin,
  image: makeImageUrl(pumpkin.image),
}));
