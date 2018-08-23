import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef
} from '@angular/core'
import { ModalService } from './modal.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  modalVC: ViewContainerRef
  displayModal: boolean = false

  constructor(private modalService: ModalService) {
    modalService.displayModalSource
      .asObservable()
      .subscribe(displayable => (this.displayModal = displayable))
  }

  ngOnInit() {
    this.modalService.modalVC = this.modalVC
  }

  closeModal(): void {
    this.modalService.closeModal()
  }
}
