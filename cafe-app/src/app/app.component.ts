import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    posts: Post[];

    constructor(private postService: PostService) {}


    ngOnInit(): void {
        this.postService.getData()
        .then(json => {
            this.posts = json;
        });

        // this.postService.getData();
    }


}
