import { Component, OnInit, Input } from '@angular/core';
import { Model } from './../model/data-model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
     
    @Input() tableData: Model[];


    constructor() {
        

    }

    ngOnInit() {
    }

    saveData = () => {
      console.log(this.tableData);
    }


}
