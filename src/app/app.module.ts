import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './pages/lista/lista.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './service/marvel.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
