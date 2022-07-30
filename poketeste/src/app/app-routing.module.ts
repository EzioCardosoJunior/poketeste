import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { PokecardsComponent } from './pokecards/pokecards.component';

const routes: Routes = [
  {path:'app-pokecards', component: PokecardsComponent},
  {path:'app-pokedetails', component: PokedetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
