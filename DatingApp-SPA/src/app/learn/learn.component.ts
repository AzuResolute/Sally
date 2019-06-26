import { Component, OnInit } from '@angular/core';
import { Node, Link } from './../d3';

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
      name: 'Azure Cloud Platform & Services',
      type: 'Deployment/Storage',
      imgUrl: '../../assets/tech/Azure.jpg'
    },
    {
      name: 'SQL Server',
      type: 'Deployment/Storage',
      imgUrl: '../../assets/tech/SQLServer.png'
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
  CONFIG = {
    N : 100,
    SPECTRUM: [
      // "rgb(222,237,250)"
      'rgb(176,212,243)',
      'rgb(128,186,236)',
      'rgb(77,158,228)',
      'rgb(38,137,223)',
      'rgb(0,116,217)',
      'rgb(0,106,197)',
      // "rgb(0,94,176)"
      // "rgb(0,82,154)"
      // "rgb(0,60,113)"
    ]
  };

  constructor() {
    // const N = APP_CONFIG.N,
    //       getIndex = number => number - 1;

    // /** constructing the nodes array */
    // for (let i = 1; i <= N; i++) {
    //   this.nodes.push(new Node(i));
    // }

    // for (let i = 1; i <= N; i++) {
    //   for (let m = 2; i * m <= N; m++) {
    //     /** increasing connections toll on connecting nodes */
    //     this.nodes[getIndex(i)].linkCount++;
    //     this.nodes[getIndex(i * m)].linkCount++;

    //     /** connecting the nodes before starting the simulation */
    //     this.links.push(new Link(i, i * m));
    //   }
    // }
  }

  ngOnInit() {
  }

}
