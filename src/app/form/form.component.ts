import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagesService } from '../services/messages.service';
import { Message } from '../model/message.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
   decode!: string;
   encode!: string;
   password!: string;

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {}

  encodeMessage() {
    const passwordWord = this.password;
    const word = this.decode;
    const message = new Message(passwordWord, word);
    this.messageService.encodeWords(message).subscribe((response:{[key: string]: string}) => {
      console.log(response.encodeWord);
    })
  }

  decodeMessage() {
    const passwordWord = this.password;
    const word = this.encode;
    const message = new Message(passwordWord, word);
    this.messageService.decodeWords(message).subscribe((response:{[key: string]: string}) => {
     console.log(response.decodeWord);
    })
  }
}
