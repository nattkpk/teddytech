import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-choose-packet',
  templateUrl: './choose-packet.component.html',
  styleUrls: ['./choose-packet.component.css']
})
export class ChoosePacketComponent implements AfterViewInit {
  @ViewChild('containerElement') containerElement: ElementRef | undefined;
  @ViewChild('preschoolSection') preschoolSection: ElementRef | undefined;
  @ViewChild('primaryschoolSection') primaryschoolSection: ElementRef | undefined;

  ngAfterViewInit() {
    
    if (this.containerElement && this.preschoolSection && this.primaryschoolSection) {
      const container = this.containerElement.nativeElement;
      const preschool = this.preschoolSection.nativeElement;
      const primaryschool = this.primaryschoolSection.nativeElement;
      preschool.classList.add("choose")
      container.addEventListener("click", () => {
        if (preschool.classList.contains("choose")) {
          preschool.classList.remove("choose");
          primaryschool.classList.add("choose");
        } else {
          preschool.classList.add("choose");
          primaryschool.classList.remove("choose");
        }
      });
    } else {
      console.error('Elements not found');
    }
  }
}
