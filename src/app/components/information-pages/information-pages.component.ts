import { Component, Input } from '@angular/core';
import { EventSection } from '../../enums/event-section';

@Component({
  selector: 'app-information-pages',
  standalone: true,
  imports: [],
  templateUrl: './information-pages.component.html',
  styleUrl: './information-pages.component.css'
})
export class InformationPagesComponent {
  @Input() public eventSection: EventSection|undefined;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
