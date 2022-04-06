import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductDetails(){
    return ({
      productStore : [
        {
          name: 'Photos',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/MgSkSX6/user3.jpg'
        },
        {
          name: 'Photos',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/9bPbTZz/user2.jpg'
        },
        {
          name: 'Photos',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/92nY6WT/user1.jpg'
        },
        {
          name: 'Photos',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/MgSkSX6/user3.jpg'
        },
        {
          name: 'Photos',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/9bPbTZz/user2.jpg'
        },
        {
          name: 'Photos',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/92nY6WT/user1.jpg'
        },
        {
          name: 'Photos',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/92nY6WT/user1.jpg'
        },
        {
          name: 'Photos',
          updated: '1/1/16',
          desc: 'Photos1 desc',
          src:'https://i.ibb.co/92nY6WT/user1.jpg'
        },
      ]
    })
  }
}
