import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

    form: any;

    private _subscribe: Subject<void> = new Subject<void>();

    constructor(
        private _router: Router,
        private _fb: FormBuilder,
        private _postsService: PostsService
    ) {
    }

    ngOnInit(): void {
        this.form = this._fb.group({
            title: ['', [Validators.required]],
            body: ['', [Validators.required]],
            userId: ['1']
        })
    }

    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this._postsService.createPost(this.form.value)
            .pipe(
                takeUntil(this._subscribe)
            ).subscribe((result) => {
                this._router.navigate(['']);
            });
    }
}
