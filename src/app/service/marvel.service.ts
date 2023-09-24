import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonagemMarvel } from '../models/personagens-marvel.interface';
import { MarvelResponse } from '../models/marvel-response.interface';
import { MarvelEventosResponse } from '../models/eventos-detalhes.interface';
import { MarvelDetalhesResponse, Series } from '../models/series-detalhes.interface';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  public apiKey:string = '';
  public hash:string = '';
  private apiUrl:string = 'https://gateway.marvel.com/v1/public';
  private appSettings:string = 'assets/config/appSettings.json';

  constructor(private http: HttpClient) {  }

  public getAppSettings(){
    return this.http.get(this.appSettings)
  }

  public getPersonagens(pagina:string): Observable<MarvelResponse<PersonagemMarvel>> {
    const url = `${this.apiUrl}/characters?orderBy=name&limit=10&offset=${pagina}&apikey=${this.apiKey}&hash=${this.hash}`;
    return this.http.get<MarvelResponse<PersonagemMarvel>>(url);

  }
  public  getSeries(idPersonagem:string):Observable<MarvelDetalhesResponse<Series>>{
    const url = `${this.apiUrl}/characters/${idPersonagem}/series?&apikey=${this.apiKey}&hash=${this.hash}`;
    return this.http.get< MarvelDetalhesResponse<Series>>(url);
  }

  public getEventos(idPersonagem:string):Observable<MarvelEventosResponse>{
    const url = `${this.apiUrl}/characters/${idPersonagem}/events?&apikey=${this.apiKey}&hash=${this.hash}`;
    return this.http.get<MarvelEventosResponse>(url);
  }

  public getBuscarPersonagem(valorDigitado:string, pagina:string):Observable<MarvelResponse<PersonagemMarvel>>{
    const url = `${this.apiUrl}/characters?orderBy=name&limit=20&offset=${pagina}&nameStartsWith=${valorDigitado}&apikey=${this.apiKey}&hash=${this.hash}`;
    return this.http.get<MarvelResponse<PersonagemMarvel>>(url);
  }

}
