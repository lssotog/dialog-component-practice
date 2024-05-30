import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
@Component({
  selector: 'custom-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit {
  dialog = viewChild<ElementRef<HTMLDialogElement>>('dialogRef')

  ngOnInit(): void {
    
  }
}
