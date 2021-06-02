import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { FormsModule } from '@angular/forms';
import { AppSearchPipe } from './core/app-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSearchPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
