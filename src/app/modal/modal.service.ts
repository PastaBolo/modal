import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  TemplateRef
} from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class ModalService {
  modalVC: ViewContainerRef
  private modalContent: ComponentRef<any>
  displayModalSource = new Subject<boolean>()

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {}

  openModal(component, instanceProperties = {}): void {
    const factory = this.resolver.resolveComponentFactory(component)
    this.modalVC.clear()
    this.modalContent = this.modalVC.createComponent(factory)
    Object.assign(this.modalContent.instance, instanceProperties)

    this.displayModalSource.next(true)

    this.modalContent.onDestroy(() => {
      this.displayModalSource.next(false)
      this.modalVC.clear()
    })
  }

  closeModal(): void {
    this.modalContent.destroy()
  }
}
