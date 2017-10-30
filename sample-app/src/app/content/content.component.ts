import { Component, OnInit } from '@angular/core';

// temp data, will replace by restful
import { staticData } from './../tempData';

import { Model } from './../model/data-model';
import { DataProcessService } from './../data-process/data-process.service';
import { SelectItem } from 'primeng/primeng';


// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

    cafeData: Model[] = staticData;
    cityData: Model[];
    tempData: Model[];
    cities: SelectItem[];
    selectedSocket: string[] = [];
    selectedCity: string;
    selectCat: string;
    arrangeList: any;
    valWifi: any;
    valSeat: any;
    valQuiet: any;


    // user: Observable<firebase.User>;
    // items: FirebaseListObservable<any[]>;
    // msgVal: string = '';

    constructor(private dataProcessService: DataProcessService) {

        // this.items = af.list('cafe-data/', {
        //   query: {
        //     limitToLast: 50
        //   }
        // });
        // console.log(this.items);

        // this.user = this.afAuth.authState;

      }


    ngOnInit(): void {
        this.cities = [];
        this.cities.push({label: '基隆', value: 'keelung'});
        this.cities.push({label: '台北', value: 'taipei'});
        this.cities.push({label: '桃園', value: 'taoyuan'});
        this.cities.push({label: '新竹', value: 'hsinchu'});
        this.cities.push({label: '苗栗', value: 'miaoli'});
        this.cities.push({label: '台中', value: 'taichung'});
        this.cities.push({label: '南投', value: 'nantou'});
        this.cities.push({label: '彰化', value: 'changhua'});
        this.cities.push({label: '雲林', value: 'yunlin'});
        this.cities.push({label: '嘉義', value: 'chiayi'});
        this.cities.push({label: '台南', value: 'tainan'});
        this.cities.push({label: '高雄', value: 'kaohsiung'});
        this.cities.push({label: '屏東', value: 'pingtung'});
        this.cities.push({label: '宜蘭', value: 'yilan'});
        this.cities.push({label: '花蓮', value: 'hualien'});
        this.cities.push({label: '台東', value: 'taitung'});
        this.cities.push({label: '澎湖', value: 'penghu'});
        this.cities.push({label: '連江', value: 'lienchiang'});

        this.tempData = [];

        console.log('ngOnInit');

        // seperate cafe stores by region
        this.arrangeList = this.dataProcessService.setDataByKey(staticData, 'city');
        console.log(this.arrangeList);
    }

    selectChange(e) {
        const selectedCityValue = e.option.value;
        console.log(selectedCityValue);
        this.tempData = this.arrangeList[selectedCityValue];
        this.cityData = this.tempData.slice();
        console.log(this.tempData);

    }

    handleChange() {

        let filterList: any;
        let targetList: any = [];

        console.log(this.selectedSocket);
        let flag = true;
        if (this.valWifi) {
            filterList = this.dataProcessService.setDataByKey(
              flag ? this.cityData : targetList, 'wifi');
            console.log(filterList);
            for (const key in filterList) {
                if (this.valWifi <= key) {
                    targetList = targetList.concat(filterList[key]);
                }
            }
            this.tempData = targetList;
            flag = false;
        }

        if (this.valSeat) {
            filterList = this.dataProcessService.setDataByKey(
              flag ? this.cityData : targetList, 'seat');
            console.log(filterList);
            targetList = [];
            for (const key in filterList) {
                if (this.valSeat <= key) {
                    targetList = targetList.concat(filterList[key]);
                }
            }
            this.tempData = targetList;
            flag = false;
        }

        if (this.valQuiet) {
            filterList = this.dataProcessService.setDataByKey(
              flag ? this.cityData : targetList, 'quiet');
            console.log(filterList);
            targetList = [];
            for (const key in filterList) {
                if (this.valQuiet <= key) {
                    targetList = targetList.concat(filterList[key]);
                }
            }
            this.tempData = targetList;
            flag = false;
        }

        if (this.selectedSocket.length > 0) {
            filterList = this.dataProcessService.setDataByKey(
              flag ? this.cityData : targetList, 'socket');
            console.log(filterList);
            targetList = [];
            for (const key in filterList) {
                if (filterList[key]) {
                    for (const s in this.selectedSocket) {
                        if (this.selectedSocket[s] === key) {
                            targetList = targetList.concat(filterList[key]);
                        }
                    }
                }
            }
            this.tempData = targetList;
            flag = false;
        }
        console.log('targetList');
        console.log(targetList);
    }
}
