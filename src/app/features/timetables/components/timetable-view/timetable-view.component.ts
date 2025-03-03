import { IGetTimetable } from '@features/timetables/interfaces';

import { OnInit, Component } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import {
  DialogService,
  DynamicDialogRef,
  DynamicDialogModule,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';

import { CoreModule } from '@core/core.module';

import { TableViewForGradeComponent } from '../table-view-for-grade/table-view-for-grade.component';
import { TimetableViewForClassComponent } from '../timetable-view-for-class/timetable-view-for-class.component';
import { TimetableViewForTeacherComponent } from '../timetable-view-for-teacher/timetable-view-for-teacher.component';
import { TimetableViewForSchoolShiftComponent } from '../timetable-view-for-school-shift/timetable-view-for-school-shift.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'smsedu-timetable-view',
  standalone: true,
  imports: [
    CoreModule,
    TabMenuModule,
    TimetableViewForClassComponent,
    TableViewForGradeComponent,
    TimetableViewForSchoolShiftComponent,
    TimetableViewForTeacherComponent,
    DynamicDialogModule,
  ],
  templateUrl: './timetable-view.component.html',
  providers: [DialogService],
})
export class TimetableViewComponent implements OnInit {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ref: DynamicDialogRef | undefined;

  data?: IGetTimetable;

  constructor(private config: DynamicDialogConfig) {}

  ngOnInit() {
    if (this.config.data && this.config.data.timetable) {
      this.data = this.config.data.timetable as IGetTimetable;
    }

    this.items = [
      { label: 'Buổi', icon: 'pi pi-home' },
      { label: 'Khối', icon: 'pi pi-chart-line' },
      { label: 'Lớp', icon: 'pi pi-chart-line' },
      { label: 'Giáo viên', icon: 'pi pi-chart-line' },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
