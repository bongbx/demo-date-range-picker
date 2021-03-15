import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DateRangeComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzDatePickerModule
  ],
  exports: [DateRangeComponent]
})
export class CoreModule { }
