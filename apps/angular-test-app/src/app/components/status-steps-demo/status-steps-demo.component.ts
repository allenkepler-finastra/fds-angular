import { Component, OnInit } from '@angular/core';
import { StatusStepComponent } from '../../../../../../libs/angular-components/status-steps/src/lib/status-step/status-step.component';
import { HorizontalStatusStepperComponent } from '../../../../../../libs/angular-components/status-steps/src/lib/horizontal-status-stepper.component';

@Component({
    selector: 'ffdc-status-steps-demo',
    templateUrl: './status-steps-demo.component.html',
    styleUrls: ['./status-steps-demo.component.scss'],
    standalone: true,
    imports: [HorizontalStatusStepperComponent, StatusStepComponent]
})
export class StatusStepsDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
