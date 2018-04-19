import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { ViewquotesComponent } from './viewquotes/viewquotes.component';
import { AddquoteComponent } from './addquote/addquote.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addauthor', component: AddauthorComponent },
  { path: 'editauthor', component: EditauthorComponent },
  { path: 'viewquotes', component: ViewquotesComponent },
  { path: 'addquote', component: AddquoteComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
