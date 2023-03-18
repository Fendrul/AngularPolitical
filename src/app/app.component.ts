import { Component } from '@angular/core';
import {DropdownOption} from "./shared/models/DropdownOption";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: DropdownOption[] = [
    { label: 'Option 1', selected: false },
    { label: 'Option 2', selected: false },
    { label: 'Option 3', selected: false },
  ];
  selectedOptions: string[] = [];

  onSelectionChange(options: DropdownOption[]): void {
    this.selectedOptions = options.filter((option) => option.selected).map((option) => option.label);
    console.log(this.selectedOptions);
  }
}
