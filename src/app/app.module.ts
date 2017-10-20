import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ControlComponent} from './ControlCenter/control.component';
import { PageNotFoundComponent } from './not-found.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {FormComponent} from './ControlCenter/Interface/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'control-center', component: ControlComponent},
  /*{ path: 'gate/:id',      component: GateItemComponent },*/
  { path: 'dashboard', component: DashboardComponent},
  /*  {
    path: 'gates',
    /!*component: GatesComponent,*!/
    data: { title: 'Remote Gate Control' }
  },*/
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
/*        preloadingStrategy: SelectivePreloadingStrategy*/
      }
    ),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'SmartFarm'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ControlComponent,
    PageNotFoundComponent,
    DashboardComponent,
    FormComponent,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
/*    SelectivePreloadingStrategy*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

