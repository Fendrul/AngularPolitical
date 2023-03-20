import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.scss']
})
export class DropdownComponentComponent {
  @Input() options: string[] = [];
  @Output() selectedOptions: EventEmitter<string[]> = new EventEmitter<string[]>();
  optionsCtrl = new FormControl();
  selectedOptions$: Observable<string[]> = this.optionsCtrl.valueChanges;

  constructor() {
    this.selectedOptions$.subscribe((value) => {
      this.selectedOptions.emit(value);
    });
  }
}
