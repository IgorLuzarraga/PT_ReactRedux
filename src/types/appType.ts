import { TextsType } from "../types/languageTypes";

export type AppState = {
  language: SelectedLanguage;
  selectedPage: SelectedPage;
  texts: TextsType;
  appFlipped: AppFlipType;
};

type AppNotFlipped = "notFlipped";
type AppFlipped = "flipped";

export type AppFlipType = AppNotFlipped | AppFlipped;

export enum SelectedPage {
  Home = "home",
  Skills = "skills",
  Projects = "projects",
  Testimonials = "testimonials",
  Contact = "contact",
  Login = "login",
  // LogOut = "logout",
}

export enum SelectedLanguage {
  Catalan = "catalan",
  English = "english",
  Spanish = "spanish",
}
