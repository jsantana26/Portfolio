import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCSharpComponent } from './projects-csharp.component';

describe('ProjectsCSharpComponent', () => {
  let component: ProjectsCSharpComponent;
  let fixture: ComponentFixture<ProjectsCSharpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsCSharpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCSharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
