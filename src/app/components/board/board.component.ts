import {Component, OnInit} from '@angular/core';
import {BoardsService} from "../../services/boards.service";
import {ActivatedRoute} from "@angular/router";
import {BoardService} from "../../services/board.service";
import IBoard from "../../../assets/shared/board";
import {filter, Observable} from "rxjs";
import {SocketService} from "../../services/socket.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  boardId: string;
  board$: Observable<IBoard>;
  fetchBoard(): void {
    this.boardService.getBoard(this.boardId).subscribe(
      board =>
        this.boards.setBoard(board)
        )
  }
    constructor(
      private boardService: BoardsService,
      private route: ActivatedRoute,
      private boards: BoardService,
      private socket: SocketService) {
    const boardId = route.snapshot.paramMap.get('boardId');
    if(!boardId) throw new Error('cant get boardId url')
      this.boardId = boardId;
    this.board$ = boards.board$.pipe(filter(Boolean))
    }

  ngOnInit(): void {
    this.socket.emit('boards:join', {boardId: this.boardId})
    this.fetchBoard();
  }
}
