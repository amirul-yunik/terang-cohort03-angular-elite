import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Post} from './post.model';
import {TuitionService} from '../../services/tuition.service';
import {PostDataSource} from './post.data-source';
import {Staff} from './staff.model';



@Component({
  selector: 'trg-post-detail',
  templateUrl: './post-detail.page.html',
})
export class PostDetailPage implements OnInit {

  public columns = ['userId', 'id', 'title','body'];
  post$: Observable<Post>;
  constructor(private tuitionService: TuitionService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // extracting param from url
    this.route.params.subscribe((params: { id: number }) => {
      this.post$ = this.tuitionService.findPost(params.id)
    });
  }


}
