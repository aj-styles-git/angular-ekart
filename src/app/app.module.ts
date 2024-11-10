import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JeeMainsFormComponent } from './jee-mains-form/jee-mains-form.component';
import { JeeMainsChildComponent } from './jee-mains-form/jee-mains-child/jee-mains-child.component';
import { ConsultifyFormComponent } from './consultify-form/consultify-form.component';
import { CtitleDescComponent } from './consultify-form/ctitle-desc/ctitle-desc.component';
import { QuestionsComponent } from './consultify-form/questions/questions.component';
@NgModule({
  declarations: [
    AppComponent,
    JeeMainsFormComponent,
    JeeMainsChildComponent,
    ConsultifyFormComponent,
    CtitleDescComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
