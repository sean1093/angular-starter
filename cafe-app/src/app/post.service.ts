import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Post} from './post';
import {Http, Response} from '@angular/http';

@Injectable()
export class PostService {
    
    private getPostsURI = 'https://cafenomad.tw/api/v1.2/cafes';

    constructor(private http: Http) { }

    getData = () => {
        return this.http.get(this.getPostsURI)
             .toPromise()
             .then(response => response.json())
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
