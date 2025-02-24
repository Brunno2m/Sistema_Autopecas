import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private apiUrl = 'https://rapidapi.com/makingdatameaningful/api/auto-parts-catalog/playground/apiendpoint_25f977e9-1fc4-47cc-9656-47f40081ce48';
  constructor(private http: HttpClient) {}

  getCatalogoPecas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
