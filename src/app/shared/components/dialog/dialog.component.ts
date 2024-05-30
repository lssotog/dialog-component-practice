import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, OnInit, input, viewChild } from '@angular/core';
import { Position } from '../../types/positionsEnum';
@Component({
  selector: 'custom-dialog',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit {
  dialog = viewChild<ElementRef<HTMLDialogElement>>('dialogRef')
  layout = input<string>('default')
  position = input<Position>(Position.DEFAULT)
 
  ngOnInit(): void {
    
  }
}
