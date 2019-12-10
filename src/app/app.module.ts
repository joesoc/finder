import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AccessibilityModule, ColorServiceModule, colorSets, IconModule, PageHeaderModule, NavigationModule, SidePanelModule, FocusIfModule, TagInputModule, TypeaheadModule } from '@ux-aspects/ux-aspects';
import { FloatLabelModule } from '@ux-aspects/ux-aspects';
import { SideMenuModule } from '@micro-focus/ux-aspects';
import { SelectModule } from '@ux-aspects/ux-aspects';
import { A11yModule } from '@angular/cdk/a11y';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SearchboxComponent } from './app/search/searchbox/searchbox.component';
import { IdoldatabasedropdownComponent } from './app/search/idoldatabasedropdown/idoldatabasedropdown.component';
import { TypeaheadComponent } from './search/content/typeahead/typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ProfileComponent,
    SearchComponent,
    SearchboxComponent,
    IdoldatabasedropdownComponent,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccessibilityModule,
    ColorServiceModule.forRoot(colorSets.microFocus),
    IconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FloatLabelModule,
    PageHeaderModule,
    NavigationModule,
    SideMenuModule,
    SelectModule,
    SidePanelModule,
    AccessibilityModule,
    ColorServiceModule.forRoot(colorSets.microFocus),
    IconModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FocusIfModule,
    NavigationModule,
    PageHeaderModule,
    SidePanelModule,
    A11yModule,
    ModalModule,
    TagInputModule,
    TypeaheadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
