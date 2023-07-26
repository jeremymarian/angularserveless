import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomemoduleModule } from '../modules/homemodule/homemodule.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TaskloaderService} from '../services';
import { ChekcsService } from '../services';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomemoduleModule,
    NavbarComponent,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [TaskloaderService,ChekcsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
