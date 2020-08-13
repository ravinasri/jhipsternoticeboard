import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterNoticeBoardSharedModule } from 'app/shared/shared.module';
import { NoticeComponent } from './notice.component';
import { NoticeDetailComponent } from './notice-detail.component';
import { NoticeUpdateComponent } from './notice-update.component';
import { NoticeDeleteDialogComponent } from './notice-delete-dialog.component';
import { noticeRoute } from './notice.route';

@NgModule({
  imports: [JhipsterNoticeBoardSharedModule, RouterModule.forChild(noticeRoute)],
  declarations: [NoticeComponent, NoticeDetailComponent, NoticeUpdateComponent, NoticeDeleteDialogComponent],
  entryComponents: [NoticeDeleteDialogComponent],
})
export class JhipsterNoticeBoardNoticeModule {}
