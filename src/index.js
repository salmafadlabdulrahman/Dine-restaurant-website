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

import familyGatheringMobile from "./assets/homepage/family-gathering-mobile.jpg";
import familyGatheringTablet from "./assets/homepage/family-gathering-tablet.jpg";
import familyGatheringDesktop from "./assets/homepage/family-gathering-desktop.jpg";

import specialEventsMobile from "./assets/homepage/special-events-mobile.jpg";
import specialEventsTablet from "./assets/homepage/special-events-tablet.jpg";
import specialEventsDesktop from "./assets/homepage/special-events-desktop.jpg";

import socialEventsMobile from "./assets/homepage/social-events-mobile.jpg";
import socialEventsTablet from "./assets/homepage/social-events-tablet.jpg";
import socialEventsDesktop from "./assets/homepage/social-events-desktop.jpg";

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
];

const events = [
  {
    name: "Family Gathering",
    description:
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    mobileImg: familyGatheringMobile,
    tabletImg: familyGatheringTablet,
    desktopImg: familyGatheringDesktop,
  },
  {
    name: "Special Events",
    description:
      "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    mobileImg: specialEventsMobile,
    tabletImg: specialEventsTablet,
    desktopImg: specialEventsDesktop,
  },
  {
    name: "Social Events",
    description:
      "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
      mobileImg: socialEventsMobile,
      tabletImg: socialEventsTablet,
      desktopImg: socialEventsDesktop,
  },
];

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
  menu,
  events
};
