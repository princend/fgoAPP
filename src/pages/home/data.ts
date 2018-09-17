import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Client-ID 757aa7465befd6c'
    })
  };


  export const url='https://api.imgur.com/3/album/b3ylv/images'