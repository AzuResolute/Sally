import { Component, OnInit } from '@angular/core';
import { Node, Link } from './../d3';
import APP_CONFIG from './../app.config';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  logoImg = '../../assets/logo.png';
  nodes: Node[] = [];
  links: Link[] = [];
  techStack = [
    {
      name: 'Angular',
      type: 'Front-end',
      imgUrl: '../../assets/tech/Angular.jpg'
    },
    {
      name: 'D3',
      type: 'Front-end',
      imgUrl: '../../assets/tech/D3.png'
    },
    {
      name: 'Bootstrap',
      type: 'Front-end',
      imgUrl: '../../assets/tech/Bootstrap.jpg'
    },
    {
      name: 'Rxjs',
      type: 'Front-end',
      imgUrl: '../../assets/tech/Rxjs.jpg'
    },
    {
      name: 'ASP Net',
      type: 'Back-end',
      imgUrl: '../../assets/tech/ASPNet.jpg'
    },
    {
      name: 'Cloudinary',
      type: 'Deployment/Storage',
      imgUrl: '../../assets/tech/Cloudinary.jpg'
    },
    {
      name: 'Azure Cloud',
      type: 'Deployment/Storage',
      imgUrl: '../../assets/tech/Azure.jpg'
    },
    {
      name: 'SQL Server',
      type: 'Deployment/Storage',
      imgUrl: '../../assets/tech/SQLServer.jpeg'
    },
    {
      name: 'TypeScript',
      type: 'Language',
      imgUrl: '../../assets/tech/TypeScript.jpg'
    },
    {
      name: 'C#',
      type: 'Language',
      imgUrl: '../../assets/tech/CSharp.jpg'
    }
  ];

  constructor() {
    const N = APP_CONFIG.N,
          getIndex = number => number - 1;

    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i, this.techStack[i - 1]));
    }

    // for (let i = 0; i < this.techStack.length; i++) {
    //   this.nodes.push(new Node(this.techStack[i].name));
    // }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;
        this.links.push(new Link(i, i * m));
      }
    }
  }

  ngOnInit() {
  }

}
