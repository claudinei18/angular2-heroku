import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ContagemRegressivaComponent } from './contagem-regressiva/contagem-regressiva.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ContagemRegressivaComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
