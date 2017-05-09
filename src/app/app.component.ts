import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private displayParagraph: boolean;
  private clickCounter: number;
  private clickArray: string[];

  public constructor() {
    this.displayParagraph = false;
    this.clickCounter = 0;
    this.clickArray = [];
  }

  public toggleParagraph(): void {
    this.clickCounter++;
    this.clickArray.push(this.clickCounter.toString());
    this.displayParagraph = !this.displayParagraph;
  }
}
