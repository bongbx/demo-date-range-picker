import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true
    }
  ]
})
export class DateRangeComponent implements ControlValueAccessor {
  isDisable = false;

  startDate = new Date();
  endDate = new Date();

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endDate) {
      return false;
    }
    return startValue.getTime() > this.endDate.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startDate) {
      return false;
    }
    return endValue.getTime() < this.startDate.getTime();
  };

  dateChange() { this.onChange([this.startDate, this.endDate]) }

  onChange = (_: [x: Date, y: Date]) => {
    console.log(_);
  }

  onTouched = () => {}

  writeValue(value: [x: Date , y: Date]): void {
    this.startDate = value[0];
    this.endDate = value[1];
  }

  registerOnChange(fn: (_: [x: Date, y: Date]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }
}
