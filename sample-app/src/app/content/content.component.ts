import { Component, OnInit } from '@angular/core';
import { MasterData } from './../masterData';
import { staticData } from './../tempData';

import { Model } from './../model/data-model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {
  cafeData: Model[] = staticData; 
  tempData: Model[];
  constructor() {

  }


  ngOnInit(): void {
    // console.log(staticData[0].name);
    // let key = staticData[0] != null ? Object.keys(staticData[0]) : null;
    // for(let k in key) {
    //   console.log(key[k]);
    // }
    this.tempData = [];
    console.log("ngOnInit");
    console.log(this.cafeData[0]);
    console.log(this.cafeData[1]);
    this.tempData.push(this.cafeData[0]);
    this.tempData.push(this.cafeData[1]);
    this.tempData.push(this.cafeData[2]);
  }


}
