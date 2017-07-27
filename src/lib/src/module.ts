import { NgModule } from '@angular/core';

import { NgxScrollSignalComponent } from './component/ngx-scroll-signal.component';
import { NgxScrollSignalService } from './service/ngx-scroll-signal.service';

@NgModule({
  declarations: [NgxScrollSignalComponent],
  providers: [NgxScrollSignalService],
  exports: [ NgxScrollSignalComponent ]
})
export class NgxScrollSignalModule { }
