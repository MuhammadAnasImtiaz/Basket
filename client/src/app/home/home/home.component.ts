import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <carousel>
    <slide>
        <img src="assets/images/hero1.jpg" alt="first slide" style="display: block; width: 100%;">
    </slide>
    <slide>
        <img src="assets/images/hero2.jpg" alt="second slide" style="display: block; width: 100%;">
    </slide>
    <slide>
        <img src="assets/images/hero3.jpg" alt="third slide" style="display: block; width: 100%;">
    </slide>
</carousel>
<section class="featured">
    <div class="d-flex justify-content-center pt-4">
        <h1>Welcome to the shop!</h1>
    </div>
</section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
