import {Component, OnInit} from '@angular/core';
import { MasterData } from './../masterData';
import { staticData } from './../tempData';

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
    ];
  }


  ngOnInit(): void {
    // console.log(staticData[0].name);
    let key = staticData[0] != null ? Object.keys(staticData[0]) : null;
    for(let k in key) {
      console.log(key[k]);
    }
  }


}
