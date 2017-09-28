import {Component, OnInit} from '@angular/core';
import { MasterData } from './../masterData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {

  bindingData: MasterData[];
  constructor() {
    this.bindingData = [
      {key: 'A1', value: 'valueA'},
      {key: 'B1', value: 'valueB'}
    ]
  }


    ngOnInit(): void {

    }


}
