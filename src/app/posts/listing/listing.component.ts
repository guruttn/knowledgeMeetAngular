import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, OnDestroy {

    private _subscribe: Subject<void> = new Subject<void>();

    listing$: Observable<Post[]> = this._postsService.getPosts().pipe(
        takeUntil(this._subscribe)
    );


    constructor(
        private _postsService: PostsService
    ) { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this._subscribe.next();
        this._subscribe.complete();
    }
}
