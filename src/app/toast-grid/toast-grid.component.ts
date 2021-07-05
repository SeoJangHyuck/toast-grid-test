import { Component, OnInit } from '@angular/core';
import Grid from 'tui-grid';

@Component({
  selector: 'app-toast-grid',
  templateUrl: './toast-grid.component.html',
  styleUrls: ['./toast-grid.component.scss']
})
export class ToastGridComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const ROW_COUNT = 1000;
    const COL_COUNT = 10;

    const data = [];
    const columns = [];

    for (let i = 0; i < ROW_COUNT; i += 1) {
      let row = {id: i} as any;
      for (let j = 0; j < COL_COUNT; j += 1) {
        row[`c${j}`] = (Math.random() * 100000000000).toFixed();
      }
      data.push(row);
    }

    for (let i = 0; i < COL_COUNT; i += 1) {
      const name = `c${i}`;
      columns.push({ name, header: name });
    }

    const grid = new Grid({
      el: document.getElementById('grid') as HTMLElement,
      data: data,
      bodyHeight: 500,
      columns: columns
    });
  }

}
