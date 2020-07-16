import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTransferComponent } from './preview-transfer.component';

describe('PreviewTransferComponent', () => {
  let component: PreviewTransferComponent;
  let fixture: ComponentFixture<PreviewTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
