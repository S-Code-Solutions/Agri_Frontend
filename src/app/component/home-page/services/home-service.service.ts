import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor() { }

  getStartDetails(){
    return ({
      slidesStore: [
        {
          id: "1",
          src: 'https://i.ibb.co/NY7Zq9n/banner2-01-01.png',
          alt: 'Image_1',
          title: 'Image_1'
        },
        {
          id: "2",
          src: 'https://i.ibb.co/52yFsK3/banner3-01-01.png',
          alt: 'Image_2',
          title: 'Image_3'
        },
        {
          id: "3",
          src: 'https://i.ibb.co/mNfnkJD/banner4-01-01.png',
          alt: 'Image_3',
          title: 'Image_3'
        },
        {
          id: "4",
          src: 'https://i.ibb.co/QvGmSMz/banner6-01.png',
          alt: 'Image_4',
          title: 'Image_4'
        },
        {
          id: "5",
          src: 'https://i.ibb.co/f29HMRm/banner5-01.png',
          alt: 'Image_5',
          title: 'Image_5'
        },
      ]
    })

  }

  getEventDetails(){
    return ({
      eventStore : [
        {
          id: "1",
          src: 'https://i.ibb.co/CBstQ3B/news5-01.png',
          alt: 'Image_1',
          title: 'Image_1',
          eventhead:'View More',
          eventsub:'Cursor Here'
        },
        {
          id: "2",
          src: 'https://i.ibb.co/DtN2xdG/news3-01.png',
          alt: 'Image_2',
          title: 'Image_3',
          eventhead:'View More',
          eventsub:'Cursor Here'
        },
        {
          id: "3",
          src: 'https://i.ibb.co/BNH63BP/news2-01.png',
          alt: 'Image_3',
          title: 'Image_3',
          eventhead:'View More',
          eventsub:'Cursor Here'
        },
        {
          id: "4",
          src: 'https://i.ibb.co/0K1BRCT/news1-01.png',
          alt: 'Image_1',
          title: 'Image_1',
          eventhead:'View More',
          eventsub:'Cursor Here'
        },
        {
          id: "5",
          src: 'https://i.ibb.co/CBstQ3B/news5-01.png',
          alt: 'Image_2',
          title: 'Image_3',
          eventhead:'View More',
          eventsub:'Cursor Here'
        },
        {
          id: "6",
          src: 'https://i.ibb.co/DtN2xdG/news3-01.png',
          alt: 'Image_3',
          title: 'Image_3',
          eventhead:'View More',
          eventsub:'Cursor Here'
        },
      ]
    })
  }

  getNewsDetails(){
    return ({
      newsStore : [
        {
          id:"1",
          src:'https://i.ibb.co/jwPhb9z/event2-01.png',
          alt:'Image_1',
          title:'Image_1',
          headone:'Organized By Freshio',
          subhead:'Paddy Fields research Event'
        },
        {
          id:"2",
          src:'https://i.ibb.co/9G3t7B5/event3-01.png',
          alt:'Image_2',
          title:'Image_3',
          headone:'Organized By Freshio',
          subhead:'Corn Fields Workshop'
        },
        {
          id:"3",
          src:'https://i.ibb.co/CQK4tLX/event4-01.png',
          alt:'Image_3',
          title:'Image_3',
          headone:'Organized By Freshio',
          subhead:'Compost Fertilizing'
        },
        {
          id:"4",
          src:'https://i.ibb.co/ssJ3bBL/event1-01.png',
          alt:'Image_1',
          title:'Image_1',
          headone:'Organized By Freshio',
          subhead:'Tube Well Event'
        },
        {
          id:"5",
          src:'https://i.ibb.co/jwPhb9z/event2-01.png',
          alt:'Image_2',
          title:'Image_3',
          headone:'Organized By Freshio',
          subhead:'Paddy Fields research Event'
        },
        {
          id:"6",
          src:'https://i.ibb.co/9G3t7B5/event3-01.png',
          alt:'Image_3',
          title:'Image_3',
          headone:'Organized By Freshio',
          subhead:'Corn Fields Workshop'
        },
      ]
    })
  }
}
