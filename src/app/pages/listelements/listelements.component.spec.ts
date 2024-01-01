import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelementsComponent } from './listelements.component';

describe('ListelementsComponent', () => {
  let component: ListelementsComponent;
  let fixture: ComponentFixture<ListelementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListelementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
