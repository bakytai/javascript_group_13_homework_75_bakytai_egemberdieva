import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient) {}

  decodeWords(message: Message) {
    const body = {
      word: message.word,
      password: message.password
    }
    return this.http.post<{[key: string]: string}>('http://localhost:8000/messages/decode', body);
  }

  encodeWords(message: Message) {
    const body = {
      word: message.word,
      password: message.password
    }
    return this.http.post<{[key: string]: string}>('http://localhost:8000/messages/encode', body);
  }
}
