import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  calidadAire!: string;
  contaminacionAgua!: string;

  constructor(public modalRef: BsModalRef) {}


}
