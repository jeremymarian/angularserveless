import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomemoduleModule } from './modules/homemodule/homemodule.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TaskloaderService} from './services';
import { ChekcsService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { InitComponent } from './components/init/init.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [AppComponent, InitComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomemoduleModule,
    NavbarComponent,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    
  ],
  providers: [TaskloaderService,ChekcsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
