import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPagesComponent } from './information-pages.component';

describe('InformationPagesComponent', () => {
  let component: InformationPagesComponent;
  let fixture: ComponentFixture<InformationPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
