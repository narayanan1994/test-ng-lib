import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgLibComponent } from './test-ng-lib.component';

describe('TestNgLibComponent', () => {
  let component: TestNgLibComponent;
  let fixture: ComponentFixture<TestNgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestNgLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
