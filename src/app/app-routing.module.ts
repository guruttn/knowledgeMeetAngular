import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './posts/listing/listing.component';
import { NewComponent } from './posts/new/new.component';

const routes: Routes = [
    {
        path: '',
        component: ListingComponent
    },
    {
        path: 'new',
        component: NewComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
