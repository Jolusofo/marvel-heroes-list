import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'sobre', component: DetalheComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
