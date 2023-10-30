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
  Login = "login",
}

export enum SelectedLanguage {
  Catalan = "catalan",
  English = "english",
  Spanish = "spanish",
}
