import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';
import { CodeComponent } from './components/code-component/code.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'code', component: CodeComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
