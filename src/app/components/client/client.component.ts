import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { clientRequest } from 'src/app/services/clientRequest';





@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  clientForm = this.formBuilder.group({
    name:['', Validators.required]
  })

  constructor(private formBuilder:FormBuilder, private clientService: ClientService){}

  addClient(){
    if(this.clientForm.valid){
    this.clientService.addClient(this.clientForm.value as clientRequest)
    this.clientForm.reset()
    }
    else{
      alert('Escriba un nombre')
    }
  }

    ngOnInit(): void {
        
    }


  

}
