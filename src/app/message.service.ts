import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: string[] = [];

  public add(message: string)
  {
    this.messages.push(message);
  }

  public getMessages(): string[]{
    return this.messages;
  }
  
  public clear(){
   this.messages = [];

  }
}
