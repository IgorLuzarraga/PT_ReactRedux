import { SelectedPage, SelectedLanguage } from "../types/appType";
import { pipe } from "fp-ts/lib/function";
import { catTexts, engTexts, espTexts } from "../data/appTexts";
import { match } from "ts-pattern";
import { TextsType } from "../types/languageTypes";

export const fromSelectedPageToPageName = (selectedPage: SelectedPage) =>
  match<SelectedPage>(selectedPage)
    .with(SelectedPage.Home, () => "Home")
    .with(SelectedPage.Skills, () => "Skills")
    .with(SelectedPage.Projects, () => "Projects")
    .with(SelectedPage.Testimonials, () => "Testimonials")
    .with(SelectedPage.Contact, () => "Contact")
    .with(SelectedPage.Login, () => "Login")
    // .with(SelectedPage.LogOut, () => "Logout")
    .exhaustive();

const addSimbolPrefix = (input: string, simbol: string): string =>
  `${simbol}${input}`;

const addHashPrefix = (input: string): string => addSimbolPrefix(input, "#");

const toLowerCase = (input: string): string => input.toLowerCase();

export const fromSelectedPageToPageId = (selectedPage: SelectedPage) =>
  pipe(selectedPage, fromSelectedPageToPageName, toLowerCase);

export const fromSelectedPageToPageHref = (selectedPage: SelectedPage) =>
  pipe(selectedPage, fromSelectedPageToPageName, toLowerCase, addHashPrefix);

// ------------------------------------------

export const importAppTexts = (selectedLanguage: SelectedLanguage): TextsType =>
  match<SelectedLanguage>(selectedLanguage)
    .with(SelectedLanguage.English, () => engTexts)
    .with(SelectedLanguage.Spanish, () => espTexts)
    .with(SelectedLanguage.Catalan, () => catTexts)
    .exhaustive();

// ------------------------------------------

export const getTextFirstLine = (text: string) => text.split(".")[0] + ".";

export const getTextExceptFirstLine = (text: string) =>
  text.substring(text.indexOf(".") + 1);

// ------------------------------------------
