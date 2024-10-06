import { Component } from '@angular/core';

@Component({
  //HTML TAG  <app-root></app-root>
  selector: 'app-root',
  // //---->HTML ATTRIBUTE <div app-root></div>
  // selector: ['app-root'],
  // //---->CSS CLASS OR USING #ID <div class="app-root"></div>
  // selector: '.app-root',
  templateUrl: './app.component.html',
  //INLINE STYLE USING styles
  styles: ['.unique-card{background: red}', '.card-header{color:yellow; padding:19px}']
})
export class AppComponent {
  title = 'angular-ekart';
}
