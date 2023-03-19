import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'inline-form',
  templateUrl: './inline-form.component.html',
  styleUrls: ['./inline-form.component.scss']
})
export class InlineFormComponent {
 @Input() title: string = '';
 @Input() defaultText: string = 'ND';
 @Input() hasBtn: boolean = false;
 @Input() btnText: string = 'Submit';
 @Input() inputPH: string = '';
 @Input() inputType: string = 'input';

 @Output() handleSubmit = new EventEmitter<string>();

  isEditing: boolean = false;

  form = this.fb.group({
    title: ['']
  })
  constructor(private fb: FormBuilder) {
  }

  editing(): void {
    if(this.title){
      this.form.patchValue({title: this.title})
    }
    this.isEditing = true;
  }

  submit() {
    if(this.form.value.title) {
      this.handleSubmit.emit(this.form.value.title);
    }
    this.isEditing = false;
    this.form.reset();
  }
}
