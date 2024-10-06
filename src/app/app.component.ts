import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //INLINE STYLE USING styles
  styles: ['.unique-card{background: red}', '.card-header{color:yellow; padding:19px}'],
  //------->URL STYLES
  // styleUrls: ['./app.component.css'],
  //----->MULTIPLE CSS FILES 
  // styleUrls: ['./app.component.css', '.test.component.css']
})
export class AppComponent {
  title = 'angular-ekart';
}
