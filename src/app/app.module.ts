import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomemoduleModule } from './modules/homemodule/homemodule.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService, TaskloaderService } from './services';
import { ChekcsService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { InitComponent } from './components/init/init.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { VoltashareService } from './services/voltashare.service';
import { AdminhomeModule } from './modules/adminhome';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components';

@NgModule({
  declarations: [AppComponent, InitComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminhomeModule,
    HomemoduleModule,
    NavbarComponent,
    SidebarComponent,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],

  providers: [TaskloaderService, ChekcsService, VoltashareService],
  bootstrap: [AppComponent],
})
export class AppModule {}
