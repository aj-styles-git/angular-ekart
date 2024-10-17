import { Component } from '@angular/core';

@Component({
  selector: 'app-jee-mains-form',
  templateUrl: './jee-mains-form.component.html',
  styleUrls: ['./jee-mains-form.component.css']
})
export class JeeMainsFormComponent {
  formObj: any = {};
  countries = ['India', 'USA', 'Canada', 'UK', 'Australia', 'Germany', 'Japan'];
  selectedCountries: string[] = [];

  onInputChange(evt: any){
    this.formObj[evt.target.name] = evt.target.value;
    console.log(this.formObj)
  }
  // Handle checkbox change event
  onCheckboxChange(event: Event, country: string) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      // Add country to selected countries
      this.selectedCountries.push(country);
    } else {
      // Remove country from selected countries
      this.selectedCountries = this.selectedCountries.filter(c => c !== country);
    }
  }

    // Handle form submission
    onSubmit() {
      console.log('Selected countries:', this.selectedCountries);
    }
  
}
