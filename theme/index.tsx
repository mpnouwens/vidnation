const palette = {
  // Button
  buttonColourTextLight: "",
  buttonColourTextDark: "",
  buttonColourBackgroundLight: "#E3E3E3",
  buttonColourBackgroundDark: "#E3E3E3",

  // Search
  searchColourTextLight: "#000000",
  searchColourTextDark: "#FFFFFF",
  searchColourBackgroundLight: "#E3E3E3",
  searchColourBackgroundDark: "#373737",
  placeholderTextColourLight: "#CDCDCD",
  placeholderTextColourDark: "#FFFFFF",

  // Text
  textColourLight: "#000000",
  textColourDark: "#FFFFFF",

  // Badges
  badgeColourTextLight: "#000000",
  badgeColourTextDark: "#000000",
  badgeColourBackgroundLight: "#E3E3E3",
  badgeColourBackgroundDark: "#E3E3E3",


  // Background
  backgroundColourLight: "#FFFFFF",
  backgroundColourDark: "#000000",

  // Navigation
  navBackgroundLight: "#FFFFFF",
  navBackgroundDark: "#000000",
  navTextColourLight: "#000000",
  navTextColourDark: "#FFFFFF",

  // Images
  moviesImageLight: require("../assets/movies.png"),
  moviesImageDark: require("../assets/moviesDark.png"),
  seriesImageLight: require("../assets/series.png"),
  seriesImageDark: require("../assets/seriesDark.png"),

  // Bar
  lightContent: "light-content",
  darkContent: "dark-content",
};

export const colors = {
  buttonColourText: palette.buttonColourTextLight,
  buttonColourBackground: palette.buttonColourBackgroundLight,
  searchColourText: palette.searchColourTextLight,
  searchColourBackground: palette.searchColourBackgroundLight,
  textColour: palette.textColourLight,
  backgroundColour: palette.backgroundColourLight,
  navBackground: palette.navBackgroundLight,
  navTextColour: palette.navTextColourLight,
  badgeColourText: palette.badgeColourTextLight,
  badgeColourBackground: palette.badgeColourBackgroundLight,
};

export const images = {
  moviesImage: palette.moviesImageLight,
  seriesImage: palette.seriesImageLight,
};

export const themedColors = {
  default: {
    ...colors,
    ...images,
  },
  light: {
    ...colors,
    ...images,
  },
  dark: {
    ...colors,
    buttonColourText: palette.buttonColourTextDark,
    buttonColourBackground: palette.buttonColourBackgroundDark,
    searchColourText: palette.searchColourTextDark,
    searchColourBackground: palette.searchColourBackgroundDark,
    textColour: palette.textColourDark,
    backgroundColour: palette.backgroundColourDark,
    navTextColour: palette.navTextColourDark,
    navBackground: palette.navBackgroundDark,
    badgeColourText: palette.badgeColourTextDark,
    badgeColourBackground: palette.badgeColourBackgroundDark,
    ...images,
    moviesImage: palette.moviesImageDark,
    seriesImage: palette.seriesImageDark,
  },
};
