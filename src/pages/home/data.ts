import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Client-ID bae1b9a55f5827a'
    })
  };


  export const url='https://api.imgur.com/3/album/5snNo4I/images'