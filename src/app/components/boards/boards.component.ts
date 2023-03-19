import {Component, OnInit} from '@angular/core';
import {BoardsService} from "../../services/boards.service";
import IBoard from "../../../assets/shared/board";


@Component({
  selector: 'boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})

export class BoardsComponent implements OnInit{
  boards: IBoard[] = [];
  constructor(private boardsService: BoardsService) {
  }

  ngOnInit(): void {
    this.boardsService.getBoards().subscribe(boards => {
      this.boards = boards
      console.log(boards)
    })
  }

  createBoard(title: string): void {
    this.boardsService.createBoard(title).subscribe((createdBoard) => {
      this.boards = [...this.boards, createdBoard];
    });
  }
}
