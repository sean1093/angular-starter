import { Component, Input } from '@angular/core';
import { MasterData } from './masterData';

@Component({
  selector: 'ui-select',
  templateUrl: './ui.select.component.html',
})
export class UiSelectComponent {
  @Input() data: MasterData[];
}
