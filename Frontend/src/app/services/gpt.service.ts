import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GptService {
  //Use this to Test AI Latest Backend
  private apiUrl = 'http://localhost:3000/api/recommendations';
  private apiUrl2 = 'http://localhost:3000/api'
  constructor(private http: HttpClient) {}

  getRecommendations(answers: any) {
    return this.http.post<any>(this.apiUrl, { answers });
  }

  getMeaningOfWord(word: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl2}/meaning`, { word });
  }
}
