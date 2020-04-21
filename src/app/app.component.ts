import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  evenNumbers: number[] = [2, 4, 6];
  oddNumbers: number[] = [1, 3, 5, 7];
  onlyOdd: boolean = false;
  value=15;
}
