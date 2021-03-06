import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

/* Services */
import { CommonService } from './providers/common.service';
import { ApiService } from './providers/api.service';
import { UserService } from './providers/user.service';

/* Guards */
import { AuthGuard } from "./guards/auth.guard";

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

import { AppRoutingModule } from './app-routing.module';
import { CdkTableModule } from '@angular/cdk/table';



import { Ng4GeoautocompleteModule } from './ng4-geo-autocomplete';

import { CreateMeetUpService } from './create-meetup/create-meetup.service';
import { GetMeetupsService } from './grid/get-meetups.service';
import { GetMeetupDetailsService } from './grid/show-meetup.service';
import { CarouselModule } from 'angular4-carousel';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { SettingsComponent } from './create-meetup-2/settings.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { EditComponent } from './create-meetup-2/edit/edit.component';
import { PsersonService } from './create-meetup-2/person.service';
import { ShowMeetupComponent } from './show-meetup/show-meetup.component';
import { DialogOverviewExampleComponent } from './grid/grid.component';
// import { SettingsComponent } from './settings/settings.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class AppMaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CreateMeetupComponent,
    SettingsComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    EditComponent,
    ShowMeetupComponent,
    DialogOverviewExampleComponent
    // SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    Ng4GeoautocompleteModule.forRoot(),
    CarouselModule,
    RouterModule
  ],
  providers: [
    CreateMeetUpService,
    GetMeetupsService,
    GetMeetupDetailsService,
    CommonService,
    ApiService,
    UserService,
    PsersonService,
    AuthGuard
  ],
  entryComponents: [
    DialogOverviewExampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
