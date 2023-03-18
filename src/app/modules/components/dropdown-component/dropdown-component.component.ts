import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DropdownOption} from "../../../shared/models/DropdownOption";

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.scss']
})
export class DropdownComponentComponent {
  @Input() options!: DropdownOption[];
  @Output() selectionChange = new EventEmitter<DropdownOption[]>();
  isOpen = false;

  get buttonText(): string {
    const selectedOptions = this.options.filter((option) => option.selected);
    if (selectedOptions.length === 0) {
      return 'sélectionner un filtre';
    } else if (selectedOptions.length === 1) {
      return selectedOptions[0].label;
    } else {
      return `${selectedOptions.length} filtres sélectionnés`;
    }
  }

  toggleOption(option: DropdownOption): void {
    option.selected = !option.selected;
    this.selectionChange.emit(this.options);
  }

}
