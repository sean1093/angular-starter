import { Injectable } from '@angular/core';

@Injectable()
export class DataProcessService {

  	constructor() { }

  	setDataByRegion = (json) => {
		console.log('[DataProcessService] setDataByRegion');
		let array = {};
		for (var key in json) {
			if (json.hasOwnProperty(key)) {
				var element = json[key];
				if (!element.remark) {
					element.remark = "";
				}
				if (element.city in array) {
					array[element.city].push(element);
				} else {
					array[element.city] = [];
					array[element.city].push(element);
				}				
			}
		}
		return array;
	}
	
	filterDataByRate = (data) => {
		
	}

}
