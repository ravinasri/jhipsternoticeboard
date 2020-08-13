import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterNoticeBoardSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [JhipsterNoticeBoardSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
