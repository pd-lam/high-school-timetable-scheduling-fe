import { ISubjectClassDto } from '@features/subject-class/interfaces';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  Output,
  Component,
  EventEmitter,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

import { AppComponent } from 'src/app/app.component';

import { CoreModule } from '@core/core.module';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'smsedu-subjects-for-class-update-period-count',
  standalone: true,
  imports: [
    CoreModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
  ],
  templateUrl: './subjects-for-class-update-period-count.component.html',
})
export class SubjectsForClassUpdatePeriodCountComponent
  implements AfterViewInit
{
  dialogVisible: boolean = false;

  subjectClassDto: ISubjectClassDto;

  prevPeriodCount: number = 0;

  @Output() save = new EventEmitter();

  subjectsForClassForm: FormGroup = this.fb.group({
    id: [null],
    periodCount: [null, Validators.compose([Validators.required])],
    subject: [null, Validators.compose([Validators.required])],
    class: [null, Validators.compose([Validators.required])],
  });

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  onHideDialog() {
    this.dialogVisible = false;
  }

  onSave() {
    this.save.emit();
  }

  onSetSubjectClassDto(): void {
    this.subjectClassDto = {
      periodCount: this.subjectsForClassForm.value.periodCount,
      subjectId: this.subjectsForClassForm.value.subject.id,
      classId: this.subjectsForClassForm.value.class.id,
    };
  }

  isDisabled() {
    return (
      this.subjectsForClassForm.controls['periodCount'].value <= 0 ||
      this.subjectsForClassForm.controls['periodCount'].value > 15 ||
      this.subjectsForClassForm.controls['periodCount'].value.toString() ===
        this.prevPeriodCount.toString()
    );
  }
}
