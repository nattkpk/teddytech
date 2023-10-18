import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class Signin {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  

  toggleChangeClass() {
    const mainContainer = this.elementRef.nativeElement.querySelector('.container');
    if (mainContainer) {
      // Check if 'change' class is already present, and toggle it.
      if (mainContainer.classList.contains('change')) {
        this.renderer.removeClass(mainContainer, 'change');
      } else {
        this.renderer.addClass(mainContainer, 'change');
      }
    }
  
  }
}
