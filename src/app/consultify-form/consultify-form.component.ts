import { Component } from '@angular/core';

@Component({
  selector: 'app-consultify-form',
  templateUrl: './consultify-form.component.html',
  styleUrls: ['./consultify-form.component.css']
})
export class ConsultifyFormComponent {
  screenStatus = 1; maxScreens = 2;

  nextScreen(){
    if (this.screenStatus < this.maxScreens) {
      this.screenStatus++;
    }
  }

  prevScreen(){
    if (this.screenStatus > 1) {
      this.screenStatus--;
    }
  }
}
