import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TuitionService} from '../../services/tuition.service';
import {PostDataSource} from './post.data-source';
import {Post} from './post.model';

@Component({
  selector: 'trg-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss']
})
export class PostListPage implements OnInit {

  public columns = ['id', 'title', 'body'];
  public dataSource: PostDataSource;


  constructor(private postService: TuitionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new PostDataSource(this.postService);
  }

  view(post: Post): void {
    console.log("Data achieve");
    console.log(JSON.stringify(post));
    this.router.navigate(['/tuition/post/', post.id]);
  }

}
