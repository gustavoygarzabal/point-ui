import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { clientRequest } from 'src/app/services/clientRequest';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})

export class ClientTableComponent implements OnInit {
  constructor(private clientService: ClientService){}

    displayedColumns: string[] = ['name'];
    dataClientSource!: clientRequest[];

    ngOnInit(): void {

      this.clientService.getClients().subscribe({
          next: (clientData) => {
            console.log(clientData);
            this.dataClientSource = clientData;
          },
          error: (errorData) => {
            console.error
          },
          complete: () => console.info('Se obtuvieron los datos')

        }
      )
    }
    
}
