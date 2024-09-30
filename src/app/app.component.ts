import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotoCarouselComponent } from './components/photo-carousel/photo-carousel.component';
import { InformationPagesComponent } from './components/information-pages/information-pages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
