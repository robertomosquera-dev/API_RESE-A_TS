
export type MovieType = {
  id: number;
  title: string;
  synopsis: string | null;
  duration: number | null;
  year: number | null;
  rating: number | null;
  url: string | null;
  isEnable: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default class Movie {
  private id: number;
  private title: string;
  private synopsis: string | null;
  private duration: number | null;
  private year: number | null;
  private rating: number | null;
  private url: string | null;
  private isEnable: boolean;
  private createdAt: Date;
  private updatedAt: Date;


  constructor(
    id: number,
    title: string,
    synopsis: string | null,
    duration: number | null,
    year: number | null,
    rating: number | null,
    isEnable: boolean,
    url: string | null,
    createdAt: Date,
    updatedAt: Date,

  ) {
    this.id = id;
    this.title = title;
    this.synopsis = synopsis;
    this.duration = duration;
    this.year = year;
    this.rating = rating;
    this.isEnable = isEnable;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.url = url;
  }

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getTitle(): string { return this.title; }
  setTitle(title: string): void { this.title = title; }

  getSynopsis(): string | null { return this.synopsis; }
  setSynopsis(synopsis: string | null): void { this.synopsis = synopsis; }

  getDuration(): number | null { return this.duration; }
  setDuration(duration: number | null): void { this.duration = duration; }

  getYear(): number | null { return this.year; }
  setYear(year: number | null): void { this.year = year; }

  getRating(): number | null { return this.rating; }
  setRating(rating: number | null): void { this.rating = rating; }

  getUrl(): string | null{ return this.url; }
  setUrl(url: string): void { this.url = url; }

  getIsEnable(): boolean { return this.isEnable; }
  setIsEnable(isEnable: boolean): void { this.isEnable = isEnable; }

  getCreatedAt(): Date { return this.createdAt; }
  setCreatedAt(createdAt: Date): void { this.createdAt = createdAt; }

  getUpdatedAt(): Date { return this.updatedAt; }
  setUpdatedAt(updatedAt: Date): void { this.updatedAt = updatedAt; }

}
