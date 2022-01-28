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
  @ViewChild('f') form!: NgForm;
  @ViewChild('decode') decode!: ElementRef;
  @ViewChild('encode') encode!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {}

  encodeMessage() {
    const passwordWord = this.password.nativeElement.value;
    const word = this.decode.nativeElement.value;
    const message = new Message(passwordWord, word);
    this.messageService.encodeWords(message).subscribe(response => {
      // this.encode = response.message;
    })
  }

  decodeMessage() {
    const passwordWord = this.password.nativeElement.value;
    const word = this.encode.nativeElement.value;
    const message = new Message(passwordWord, word);
    this.messageService.decodeWords(message).subscribe(response => {
      // this.encode = response.message;
    })
  }
}
