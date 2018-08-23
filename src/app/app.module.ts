import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ModalContentComponent } from './modal-content/modal-content.component'
import { ModalModule } from './modal/modal.module'
import { ModalStyleDirective } from './modal-style/modal-style.directive'

@NgModule({
  declarations: [AppComponent, ModalContentComponent, ModalStyleDirective],
  imports: [BrowserModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent]
})
export class AppModule {}
