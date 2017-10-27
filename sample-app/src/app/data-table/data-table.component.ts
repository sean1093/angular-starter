import { Component, OnInit, Input } from '@angular/core';
import { Model } from './../model/data-model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

    @Input() tableData: Model[];
    displayDialog: boolean = false;
    dialogTitle: string;
    selectData: Model;
    remark: any;

    constructor() {


    }

    ngOnInit() {
        this.selectData = this.tableData[0];
    }

    saveData = () => {
        console.log(this.tableData);
        this.displayDialog = false;
    }

    openDetail = (event) => {
        console.log('openDetail');
        console.log(event.data);
        this.selectData  = event.data;
        this.displayDialog = true;
        this.dialogTitle = this.selectData.name;
        this.remark = this.selectData.remark;
    }

    openMap = (selectData) => {
        console.log('openMap: ' + selectData.name);
        const url = 'https://maps.google.com/?q=' + selectData.name;
        window.open(url);
    }
}
