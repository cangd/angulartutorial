import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<div class="warning-msg"><p>Yo, wtf!</p> </div>',
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid;
      }
      .warning-msg {
        margin: 10px 0;
        padding: 10px;
        border-radius: 3px 3px 3px 3px;
      }
      .warning-msg {
        color: #9f6000;
        background-color: #feefb3;
      }
    `,
  ],
})
export class WarningAlertComponent {}
