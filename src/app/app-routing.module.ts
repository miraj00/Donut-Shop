import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutDetailComponent } from './components/donut-detail/donut-detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [

  {path: 'home', component: HomePageComponent},
  {path: 'donutDetail/:id', component: DonutDetailComponent},
  {path: 'shopping-cart/:id', component: ShoppingCartComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
