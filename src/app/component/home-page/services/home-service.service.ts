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
          src: 'https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg',
          alt: 'Image_1',
          title: 'Image_1'
        },
        {
          id: "2",
          src: 'https://www.baltspace.eu/images/baltspace_research/header_marxan_900_300.jpg',
          alt: 'Image_2',
          title: 'Image_3'
        },
        {
          id: "3",
          src: 'http://energiaekonomistit.fi/wp/wp-content/uploads/2012/12/lighthouse-900x300.jpg',
          alt: 'Image_3',
          title: 'Image_3'
        },
      ]
    })

  }

  getEventDetails(){
    return ({
      eventStore : [
        {
          id: "1",
          src: 'https://i.ibb.co/v4ppJjB/project3.jpg',
          alt: 'Image_1',
          title: 'Image_1',
          eventhead:'Event Head-1',
          eventsub:'Event Sub-1'
        },
        {
          id: "2",
          src: 'https://i.ibb.co/KhxzYv5/project2.jpg',
          alt: 'Image_2',
          title: 'Image_3',
          eventhead:'Event Head-2',
          eventsub:'Event Sub-2'
        },
        {
          id: "3",
          src: 'https://i.ibb.co/VVmW8hb/project1.jpg',
          alt: 'Image_3',
          title: 'Image_3',
          eventhead:'Event Head-3',
          eventsub:'Event Sub-3'
        },
        {
          id: "4",
          src: 'https://i.ibb.co/v4ppJjB/project3.jpg',
          alt: 'Image_1',
          title: 'Image_1',
          eventhead:'Event Head-4',
          eventsub:'Event Sub-4'
        },
        {
          id: "5",
          src: 'https://i.ibb.co/KhxzYv5/project2.jpg',
          alt: 'Image_2',
          title: 'Image_3',
          eventhead:'Event Head-5',
          eventsub:'Event Sub-5'
        },
        {
          id: "6",
          src: 'https://i.ibb.co/VVmW8hb/project1.jpg',
          alt: 'Image_3',
          title: 'Image_3',
          eventhead:'Event Head-6',
          eventsub:'Event Sub-6'
        },
      ]
    })
  }

  getNewsDetails(){
    return ({
      newsStore : [
        {
          id:"1",
          src:'https://i.ibb.co/SQZJXZM/people.jpg',
          alt:'Image_1',
          title:'Image_1',
          headone:'NewsHead1',
          subhead:'SubHead1'
        },
        {
          id:"2",
          src:'https://i.ibb.co/pxB672v/business-partners-meeting-cafe.jpg',
          alt:'Image_2',
          title:'Image_3',
          headone:'NewsHead2',
          subhead:'SubHead2'
        },
        {
          id:"3",
          src:'https://i.ibb.co/SQZJXZM/people.jpg',
          alt:'Image_3',
          title:'Image_3',
          headone:'NewsHead3',
          subhead:'SubHead3'
        },
        {
          id:"4",
          src:'https://i.ibb.co/pxB672v/business-partners-meeting-cafe.jpg',
          alt:'Image_1',
          title:'Image_1',
          headone:'NewsHead4',
          subhead:'SubHead4'
        },
        {
          id:"5",
          src:'https://i.ibb.co/SQZJXZM/people.jpg',
          alt:'Image_2',
          title:'Image_3',
          headone:'NewsHead5',
          subhead:'SubHead5'
        },
        {
          id:"6",
          src:'https://i.ibb.co/pxB672v/business-partners-meeting-cafe.jpg',
          alt:'Image_3',
          title:'Image_3',
          headone:'NewsHead6',
          subhead:'SubHead6'
        },
      ]
    })
  }
}
