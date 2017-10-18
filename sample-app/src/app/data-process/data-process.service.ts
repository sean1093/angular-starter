import { Injectable } from '@angular/core';

@Injectable()
export class DataProcessService {

      constructor() { }

      setDataByKey = (json, k) => {
        console.log('[DataProcessService] setDataByKey');
        let array = {};
        for (var key in json) {
            if (json.hasOwnProperty(key)) {
                var element = json[key];
                if (!element.remark) {
                    element.remark = "";
                }
                if (element[k] in array) {
                    array[element[k]].push(element);
                } else {
                    array[element[k]] = [];
                    array[element[k]].push(element);
                }
            }
        }
        return array;
    }

    filterDataByRate = (data) => {

    }

}
