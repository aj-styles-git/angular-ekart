import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  currentSlide: number = 0;
    sliderArr = [{color:"red"},{color:"yellow"},{color: "pink"}];

    onSliderChange(){
      this.currentSlide = (this.currentSlide + 1) % this.sliderArr.length;
    }

    onSliderNextChange(){
      this.currentSlide = (this.currentSlide - 1 + this.sliderArr.length) % this.sliderArr.length;
    }
}
