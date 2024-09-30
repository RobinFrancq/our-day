import { Routes } from '@angular/router';
import { EventSection } from './enums/event-section';
import { FullPageComponent } from './components/full-page/full-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'all_ceremony', component: FullPageComponent, data: { eventSection: EventSection.ALL_CEREMONY } },
    { path: 'all', component: FullPageComponent, data: { eventSection: EventSection.ALL } },
    { path: 'reception', component: FullPageComponent, data: { eventSection: EventSection.RECEPTION } },
    { path: '**', component: PageNotFoundComponent }
];
