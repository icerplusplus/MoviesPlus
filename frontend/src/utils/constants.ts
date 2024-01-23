import LOGO from "../assets/root/img/logo.png";
import HERO from "../assets/root/img/hero/hero-1.jpg";

export { LOGO, HERO };

export enum FiltersEnum {
  day = "day",
  month = "month",
  week = "week",
  years = "years",
}
export enum MovieEnumType {
  tvSeries = "TV Series",
  movie = "Movie",
}

export enum MovieEnumStatus {
  airing = "Airing",
}

export const Api = {
  BaseUrl: "http://localhost:8080/v1"
}