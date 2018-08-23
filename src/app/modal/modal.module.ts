import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModalService } from './modal.service'
import { ModalComponent } from './modal.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {}
