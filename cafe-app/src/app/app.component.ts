import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    posts: Post[];
    iframeSrc: SafeUrl;
    constructor(private postService: PostService, private sanitizer: DomSanitizer) {

      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("http://www.google.com/");
    }


    changeSrc = () => {
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://tw.yahoo.com/");
    }

    ngOnInit(): void {
        // this.postService.getData()
        // .then(json => {
        //     this.posts = json;
        // });

        // this.postService.getData();
    }


}
