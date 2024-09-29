import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoCarouselComponent } from './components/photo-carousel/photo-carousel.component';
import { InformationPagesComponent } from './components/information-pages/information-pages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoCarouselComponent, InformationPagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'our-day';
}
