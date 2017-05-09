import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private displayParagraph: boolean;
  private clickCounter: number;
  private clickDates: Date[];

  public constructor() {
    this.displayParagraph = false;
    this.clickCounter = 0;
    this.clickDates = [];
  }

  public toggleParagraph(): void {
    this.clickDates.push(new Date());
    this.displayParagraph = !this.displayParagraph;
  }
}
