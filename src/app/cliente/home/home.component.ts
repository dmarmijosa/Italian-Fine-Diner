import { AfterViewInit, Component } from '@angular/core';
declare var Swiper: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new Swiper('.home__wrapper', {
      loop: true,
      createElements:true,
      navigation:true,
      autoplay:{
        delay:5000
      }
    });
  }
}
