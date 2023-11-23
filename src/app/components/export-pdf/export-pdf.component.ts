import { Component, OnInit } from '@angular/core';
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

// Cargar los tipos de letra necesarios
pdfmake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-export-pdf',
  templateUrl: './export-pdf.component.html',
  styleUrls: ['./export-pdf.component.css']
})
export class ExportPdfComponent implements OnInit {

  exportForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.exportForm = this.fb.group({
      exportOption: ['apiData'] // Opción por defecto
    });
  }

  ngOnInit(): void {}

  async exportarPDF() {
    const selectedOption = this.exportForm.get('exportOption')?.value;

    if (selectedOption === 'apiData') {
      try {
        const response = await this.dataService.getData();
        console.log(response);
        const pdfContent = this.generarPDFContent(response);
        this.generarPDF(pdfContent);
        if (!response.error) {

        }

      } catch (error) {
        console.error('Error al realizar la petición:', error);
      }
    } else if (selectedOption === 'googleColabResults') {
      // Descargar el archivo PDF existente
      const pdfPath = '../assets/regresion_logistica.pdf'; // Ajusta la ruta según tu estructura de carpetas
      this.descargarPDF(pdfPath);
    } else {
      console.log('Opción no válida');
    }
  }

  private generarPDFContent(data: any): any {
    // Crear una tabla con los datos obtenidos
    const tableBody = data.map((item: any) => [
      item.city,
      item.region,
      item.country,
      item.air_quality,
      item.water_pollution,
      item.create_date
    ]);

    // Definir la estructura del documento PDF
    const documentDefinition = {
      content: [
        { text: 'Reporte PDF', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              ['City', 'Region', 'Country', 'Air Quality', 'Water Pollution', 'Create Date'],
              ...tableBody
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        }
      }
    };

    return documentDefinition;
  }

  private generarPDF(pdfContent: any) {
    pdfmake.createPdf(pdfContent).download('reporte.pdf');
  }

  private descargarPDF(pdfPath: string) {
    // Descargar el archivo PDF existente
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'reporte_google_colab.pdf';
    a.click();
  }
}
