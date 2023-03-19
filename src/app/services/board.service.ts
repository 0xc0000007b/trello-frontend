import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import IBoard from "../../assets/shared/board";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  board$ = new BehaviorSubject<IBoard | null>(null)

  setBoard(board: IBoard): void {
    this.board$.next(board)
  }
  constructor() { }
}
