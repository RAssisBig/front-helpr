import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogStatusComponent } from './log-status.component';

describe('LogStatusComponent', () => {
    let component: LogStatusComponent;
    let fixture: ComponentFixture<LogStatusComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LogStatusComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LogStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
