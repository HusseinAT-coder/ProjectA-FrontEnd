import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },//if route is empty
    { path: 'home', component: HomePageComponent },
    //   { path: 'List', component: MovieListComponent },
    //   { path: '', component: MovieListComponent },
    //   { path: 'Detail/:id', component: MovieDetailComponent },
    //   { path: 'Edit/:id', component:MovieEditComponent}
    { path: '**', component: HomePageComponent },// if no route mactch
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
    HomePageComponent,
]
