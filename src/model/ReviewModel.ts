

export type ReviewType = {

  id: number;
  content: string;
  score: number;

  createdAt: Date;
  updatedAt: Date;
  isEnable: boolean;

  movieId: number;
  userId: number;

}

export default class Review {
  private id: number;
  private content: string;
  private score: number;
  private createdAt: Date;
  private updatedAt: Date;
  private isEnable: boolean;
  private movieId: number;
  private userId: number;

  constructor(
    id: number,
    content: string,
    score: number,
    createdAt: Date,
    updatedAt: Date,
    isEnable: boolean,
    movieId: number,
    userId: number
  ) {
    this.id = id;
    this.content = content;
    this.score = score;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isEnable = isEnable;
    this.movieId = movieId;
    this.userId = userId;
  }

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getContent(): string { return this.content; }
  setContent(content: string): void { this.content = content; }

  getScore(): number { return this.score; }
  setScore(score: number): void { this.score = score; }

  getCreatedAt(): Date { return this.createdAt; }
  setCreatedAt(createdAt: Date): void { this.createdAt = createdAt; }

  getUpdatedAt(): Date { return this.updatedAt; }
  setUpdatedAt(updatedAt: Date): void { this.updatedAt = updatedAt; }

  getIsEnable(): boolean { return this.isEnable; }
  setIsEnable(isEnable: boolean): void { this.isEnable = isEnable; }

  getMovieId(): number { return this.movieId; }
  setMovieId(movieId: number): void { this.movieId = movieId; }

  getUserId(): number { return this.userId; }
  setUserId(userId: number): void { this.userId = userId; }
}