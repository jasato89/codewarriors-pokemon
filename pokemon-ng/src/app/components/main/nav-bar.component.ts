import { Component, OnInit } from '@angular/core';
import {bounceAnimation, fadeInDownBigAnimation, wobbleAnimation} from "angular-animations";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    wobbleAnimation(),
    bounceAnimation(),
  ],
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isAnimated: boolean[] = [false, false, false];

  animateIcon(number: number) {
    this.isAnimated[number] = !this.isAnimated[number];

  }
}
