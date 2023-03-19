import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import IBoard from "../../assets/shared/board";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BoardsService {



  getBoards(): Observable<IBoard[]> {
    return this.http.get<IBoard[]>(environment.baseUrl + '/boards')
  }
  createBoard(title: string): Observable<IBoard> {
    const url = environment.baseUrl + '/boards';
    return this.http.post<IBoard>(url, { title });
  }

  getBoard(boardId: string): Observable<IBoard> {
    const url = `${environment.baseUrl}/boards/${boardId}`;
    return this.http.get<IBoard>(url);
  }
  constructor(private http: HttpClient) { }
}
