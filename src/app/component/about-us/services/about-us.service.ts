import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor() { }
  getProjectDetails(){
    return ({
      startStore : [
        {
          id:"1",
          src:'https://i.ibb.co/9G3t7B5/event3-01.png',
          subheading1:'Image_1',
          title:'Image_1'
        },
        {
          id:"2",
          src:'https://i.ibb.co/CQK4tLX/event4-01.png',
          subheading1:'Image_2',
          title:'Image_2'
        },
        {
          id:"3",
          src:'https://i.ibb.co/jwPhb9z/event2-01.png',
          subheading1:'Image_3',
          title:'Image_3'
        },
        {
          id:"4",
          src:'https://i.ibb.co/ssJ3bBL/event1-01.png',
          subheading1:'Image_4',
          title:'Image_4'
        },
        {
          id:"5",
          src:'https://i.ibb.co/9G3t7B5/event3-01.png',
          subheading1:'Image_5',
          title:'Image_5'
        },
        {
          id:"6",
          src:'https://i.ibb.co/CQK4tLX/event4-01.png',
          alt:'Image_6',
          title:'Image_6'
        },
      ]
    })
  }
}
