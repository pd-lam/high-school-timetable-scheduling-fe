import { CommonModule } from '@angular/common';
import { OnInit, Component } from '@angular/core';

import { paths } from 'src/app/routes/paths';

import { LogoMainComponent } from '@shared/smsedu-logo/logo-main/logo-main.component';

import { LayoutMainComponent } from '../layout-main.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'layout-main-menu',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, LogoMainComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: any[];

  constructor(public appMain: LayoutMainComponent) {
    // constructor export MenuComponent {
  }

  ngOnInit(): void {
    this.model = [
      {
        label: 'Lớp học',
        icon: 'pi pi-fw pi-star-fill',
        routerLink: paths.smsedu.class.root,
        items: [
          {
            label: 'Danh sách lớp học',
            icon: 'pi pi-fw pi-microsoft',
            routerLink: paths.smsedu.class.list,
          },
        ],
      },
      {
        label: 'Môn học',
        icon: 'pi pi-fw pi-star-fill',
        routerLink: paths.smsedu.subject.root,
        items: [
          {
            label: 'Danh sách môn học',
            icon: 'pi pi-fw pi-book',
            routerLink: paths.smsedu.subject.list,
          },
        ],
      },
      {
        label: 'Giáo viên',
        icon: 'pi pi-fw pi-star-fill',
        routerLink: paths.smsedu.teacher.root,
        items: [
          {
            label: 'Danh sách Giáo viên',
            icon: 'pi pi-fw pi-id-card',
            routerLink: paths.smsedu.teacher.list,
          },
        ],
      },
      {
        label: 'Phân công',
        icon: 'pi pi-fw pi-star-fill',
        routerLink: paths.smsedu.assignment.root,
        items: [
          {
            label: 'Phân công chủ nhiệm',
            icon: 'pi pi-fw pi-users',
            routerLink: paths.smsedu.assignment.teacherLeader,
          },
          // {
          //   label: 'Phân công Môn học',
          //   icon: 'pi pi-fw pi-id-card',
          //   routerLink: paths.smsedu.assignment.subject,
          // },
          {
            label: 'Phân công giảng dạy',
            icon: 'pi pi-fw pi-wrench',
            routerLink: paths.smsedu.assignment.teaching,
          },
        ],
      },
      {
        label: 'Thời khóa biểu',
        icon: 'pi pi-fw pi-star-fill',
        routerLink: paths.smsedu.timetable.root,
        items: [
          {
            label: 'Danh sách',
            icon: 'pi pi-fw pi-calendar',
            routerLink: paths.smsedu.timetable.list,
          },
          {
            label: 'Tạo',
            icon: 'pi pi-fw pi-slack',
            routerLink: paths.smsedu.timetable.create,
          },
          // {
          //   label: 'Chỉnh sửa',
          //   icon: 'pi pi-fw pi-id-card',
          //   routerLink: paths.smsedu.timetable.edit,
          // },
          // {
          //   label: 'Xem',
          //   icon: 'pi pi-fw pi-id-card',
          //   routerLink: paths.smsedu.timetable.view,
          // },
        ],
      },
    ];
  }

  onMenuClick(): void {
    this.appMain.menuClick = true;
  }
}
