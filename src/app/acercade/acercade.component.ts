import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms';
import { MessageService } from '../services/message.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {

  constructor(public _MessageService: MessageService) {}

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      alert("Mensaje enviado correctamente");

    });
    }

}
