import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnterpriseComponent } from './home-enterprise.component';

describe('HomeEnterpriseComponent', () => {
  let component: HomeEnterpriseComponent;
  let fixture: ComponentFixture<HomeEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEnterpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
