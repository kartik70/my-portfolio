import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private _linkedInUrl: string | undefined;
  public get linkedInUrl(): string | undefined {
    return this._linkedInUrl;
  }
  public set linkedInUrl(value: string | undefined) {
    this._linkedInUrl = value;
  }
  githubUrl: string | undefined;

  constructor() { }
}
