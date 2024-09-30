import { Component } from '@angular/core';
import { EventSection } from '../../enums/event-section';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PhotoCarouselComponent } from '../photo-carousel/photo-carousel.component';
import { InformationPagesComponent } from '../information-pages/information-pages.component';

@Component({
  selector: 'app-full-page',
  standalone: true,
  imports: [PhotoCarouselComponent, InformationPagesComponent, RouterModule],
  templateUrl: './full-page.component.html',
  styleUrl: './full-page.component.css'
})
export class FullPageComponent {
  public eventSection: EventSection|undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the route data to determine which page it is
    console.log(this.route.snapshot.data);
    // Subscribing to data to ensure it's reactive
    this.route.data.subscribe(data => {
      console.log(data);
      this.eventSection = data['eventSection'];
    });
  }
}
