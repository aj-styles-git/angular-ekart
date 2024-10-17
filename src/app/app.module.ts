import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JeeMainsFormComponent } from './jee-mains-form/jee-mains-form.component';
@NgModule({
  declarations: [
    AppComponent,
    JeeMainsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
