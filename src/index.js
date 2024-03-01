import headerBgMobile from "./assets/homepage/hero-bg-mobile.jpg";
import headerBgTablet from "./assets/homepage/hero-bg-tablet.jpg";
import headerBgDesktop from "./assets/homepage/hero-bg-desktop.jpg";

import enjoyablePlaceMobile from "./assets/homepage/enjoyable-place-mobile.jpg";
import enjoyablePlaceTablet from "./assets/homepage/enjoyable-place-tablet.jpg";
import enjoyablePlaceDesktop from "./assets/homepage/enjoyable-place-desktop.jpg";

import locallySourcedMobile from "./assets/homepage/locally-sourced-mobile.jpg";
import locallySourcedTablet from "./assets/homepage/locally-sourced-tablet.jpg";
import locallySourcedDesktop from "./assets/homepage/locally-sourced-desktop.jpg";

import salmonMobileImg from "./assets/homepage/salmon-mobile.jpg";
import salmonTabletImg from "./assets/homepage/salmon-desktop-tablet.jpg";

import beefMobileImg from "./assets/homepage/beef-mobile.jpg";
import beefTabletImg from "./assets/homepage/beef-desktop-tablet.jpg";

import chocolateMobileImg from "./assets/homepage/chocolate-mobile.jpg";
import chocolateTabletImg from "./assets/homepage/chocolate-desktop-tablet.jpg";

const menu = [
  {
    name: "Seared Salmon Fillet",
    description:
      "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    mobileImg: salmonMobileImg,
    desktopImg: salmonTabletImg,
  },
  {
    name: "Rosemary Filet Mignon",
    description:
      "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    mobileImg: beefMobileImg,
    desktopImg: beefTabletImg,
  },
  {
    name: "Summer Fruit Chocolate Mousse",
    description:
      "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    mobileImg: chocolateMobileImg,
    desktopImg: chocolateTabletImg,
  },
]

export {
  headerBgMobile,
  headerBgTablet,
  headerBgDesktop,
  enjoyablePlaceMobile,
  enjoyablePlaceTablet,
  enjoyablePlaceDesktop,
  locallySourcedMobile,
  locallySourcedTablet,
  locallySourcedDesktop,
  menu
};
