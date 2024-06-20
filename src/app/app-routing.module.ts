import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PlanoScreenComponent } from './plano-screen/plano-screen.component';
import { BlogScreenComponent } from './blog-screen/blog-screen.component';
import { ContatoScreenComponent } from './contato-screen/contato-screen.component';

const routes: Routes = [
  {path:'home', component:HomeScreenComponent},
  {path:'plano',component:PlanoScreenComponent},
  {path:'blog', component:BlogScreenComponent},
  {path:'contatos', component:ContatoScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled', anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
