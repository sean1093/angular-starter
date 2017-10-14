import { Component, OnInit } from '@angular/core';
import { MasterData } from './../masterData';
import { staticData } from './../tempData';

import { Model } from './../model/data-model';
import { DataProcessService } from './../data-process/data-process.service';
import {SelectItem} from 'primeng/primeng';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {
    cafeData: Model[] = staticData; 
    tempData: Model[];
    cities: SelectItem[];
    selectedCity: string;
    arrangeList: any;
    val: any;
    yearFilter: number;
    constructor(private dataProcessService: DataProcessService) {

        this.cities = [];
        this.cities.push({label:'台北', value:'taipei'});
        this.cities.push({label:'彰化', value:'changhua'});
        this.cities.push({label:'嘉義', value:'chiayi'});
        this.cities.push({label:'新竹', value:'hsinchu'});
        this.cities.push({label:'花蓮', value:'hualien'});
        this.cities.push({label:'高雄', value:'kaohsiung'});
        this.cities.push({label:'基隆', value:'keelung'});
        this.cities.push({label:'連江', value:'lienchiang'});
        this.cities.push({label:'苗栗', value:'miaoli'});
        this.cities.push({label:'南投', value:'nantou'});
        this.cities.push({label:'澎湖', value:'penghu'});
        this.cities.push({label:'台中', value:'taichung'});
        this.cities.push({label:'台南', value:'tainan'});
        this.cities.push({label:'台東', value:'taitung'});
        this.cities.push({label:'桃園', value:'taoyuan'});
        this.cities.push({label:'宜蘭', value:'yilan'});
        this.cities.push({label:'雲林', value:'yunlin'});
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
        this.tempData.push(this.cafeData[3]);
        this.tempData.push(this.cafeData[4]);

        // seperate cafe stores by region
        this.arrangeList = this.dataProcessService.setDataByRegion(staticData);
        console.log(this.arrangeList);
    }

    selectChange(e) {
        const selectedCityValue = e.option.value;
        console.log(selectedCityValue);
        this.tempData = this.arrangeList[selectedCityValue];
        console.log(this.tempData );

    }

    handleChange(e) {
        //e.value is the new value
        console.log(e.value);
    }
}
