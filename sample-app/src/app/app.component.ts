import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
// import {Post} from './post';
import { MasterData } from './masterData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    bindingData: MasterData[];
    // posts: Post[];
    constructor(private postService: PostService) {
      this.bindingData = [
        {key: 'A1', value: 'valueA'},
        {key: 'B1', value: 'valueB'}
      ]
    }


    ngOnInit(): void {
        // this.postService.getData()
        // .then(json => {
        //     this.posts = json;
        // });

        // this.postService.getData();
    }


}
