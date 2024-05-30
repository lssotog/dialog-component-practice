import { Component } from '@angular/core';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'custom-modal',
  standalone: true,
  imports: [
    HeaderComponent,
    DialogBodyComponent,
    FooterComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

}
