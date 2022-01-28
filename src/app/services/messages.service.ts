import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient) {}

  decodeWords(message: Message) {
    return this.http.post('http://localhost:8000/messages/decode', message);
  }

  encodeWords(message: Message) {
    return this.http.post('http://localhost:8000/messages/encode', message);
  }
}
