import { Component,TemplateRef  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form: FormGroup;
  modalRef!: BsModalRef;

  constructor(private dataService: DataService,private modalService: BsModalService){

    this.form = new FormGroup({
      city: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      //validador entero y decimal
      air_quality: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
      water_pollution: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)])
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      try {
        const response = await this.dataService.setData(this.form.value);

        if (!response.error) {
          this.openModal(response); // Llama a la función para abrir el modal con los datos
        }
      } catch (error) {
        console.error('Error al realizar la petición:', error);
        // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      }
    } else {
      console.error('Formulario inválido. Por favor, complete todos los campos correctamente.');
      // Puedes mostrar un mensaje al usuario indicando que el formulario es inválido
    }
  }

  openModal(response: any) {
    const { 'air_quality': calidadAire, 'water_pollution': contaminacionAgua } = response;
  
    const message = `Calidad del Aire: ${calidadAire}\nContaminación del Agua: ${contaminacionAgua}`;
  
    alert(message);
  }

}

