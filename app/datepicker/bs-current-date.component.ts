import { Component } from '@angular/core';
import { DatePickerBase } from './bs-date-picker-base.class';
import { DatePickerService } from './bs-date-picker.service';
import { DatePickerOptions } from './bs-date-picker-options.provider';
import * as moment from 'moment';
@Component({
  selector: 'bs-current-date',
  exportAs: 'bs-current-date',
  moduleId: module.id,
  templateUrl: './bs-current-date.html'
})
export class CurrentDateComponent extends DatePickerBase {
  public title: string;

  public constructor(datePickerService:DatePickerService, options:DatePickerOptions) {
    super(datePickerService, options);
    datePickerService.selectedDateChange.subscribe(()=>this.refresh());
  }

  public refresh():void {
    if (!this.datePickerService.selectedDate) {
      this.title = '';
      return;
    }
    this.title = moment(this.datePickerService.selectedDate)
      .format(this.options.format.currentDate);
  }
}