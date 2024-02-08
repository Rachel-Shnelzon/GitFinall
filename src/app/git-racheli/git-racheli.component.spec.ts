import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRacheliComponent } from './git-racheli.component';

describe('GitRacheliComponent', () => {
  let component: GitRacheliComponent;
  let fixture: ComponentFixture<GitRacheliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitRacheliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitRacheliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
