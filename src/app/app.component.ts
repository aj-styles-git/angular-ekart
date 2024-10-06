import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  property_binding_name:string = "Test simple binding";
  searchText: string = 'test yy';
  title = 'angular-ekart';

  onViewToComponent(event : any){
    this.property_binding_name = event.target.value;
  }
}
