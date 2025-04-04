import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulCardComponent } from './beautiful-card.component';

describe('BeautifulCardComponent', () => {
  let component: BeautifulCardComponent;
  let fixture: ComponentFixture<BeautifulCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautifulCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautifulCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
