import { Component } from '@angular/core'
import { ModalService } from './modal/modal.service'
import { ModalContentComponent } from './modal-content/modal-content.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  openModal(): void {
    this.modalService.openModal(ModalContentComponent, { text: 'custom text' })
  }
}
