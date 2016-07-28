import { Component, Inject } from '@angular/core';
import { NgSwitchCase, NgSwitch } from '@angular/common';
import { DayPickerComponent } from './day/bs-day-picker.component';
import { MonthPickerComponent } from './month/bs-month-picker.component';
import { YearPickerComponent } from './year/bs-year-picker.component';
import { DatePickerOptions } from './common/bs-date-picker-options.provider';
import { DateTimePickerComponent } from './time/bs-date-time-picker.component';
import { CurrentDateComponent } from './current-date/bs-current-date.component';
import { CustomRangePickerComponent } from './custom-range/bs-custom-range-picker.component';

@Component({
  selector: 'bs-date-picker-view',
  exportAs: 'bs-date-picker-view',
  templateUrl: './bs-date-picker-view.html',
  directives: [DayPickerComponent, MonthPickerComponent, YearPickerComponent,
    DateTimePickerComponent, CurrentDateComponent, CustomRangePickerComponent,
    NgSwitch, NgSwitchCase],
  moduleId: module.id
})
export class DatePickerViewComponent {
  public options:DatePickerOptions;

  public constructor(@Inject(DatePickerOptions) datePickerOptions:DatePickerOptions) {
    this.options = datePickerOptions;
  }
}