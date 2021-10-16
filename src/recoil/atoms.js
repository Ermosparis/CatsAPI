import { atom } from "recoil";

export const categorieIdState = atom({
  key: "categorieState",
  default: "",
});

export const catsArrayState = atom({
  key: "catsState",
  default: "",
});

export const pageNumberState = atom({
  key: "pageState",
  default: 1,
});
