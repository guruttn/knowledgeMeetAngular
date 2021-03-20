import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamelcasePipe } from './camelcase.pipe'
import { HomeService } from './home-service';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule} from '@angular/router'
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//setting up routes
const MyRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'reactive', component: FormComponent
  },
  {
    path: 'home', component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CamelcasePipe,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MyRoutes),
    NgbModule

  ],
  providers: [HomeService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
