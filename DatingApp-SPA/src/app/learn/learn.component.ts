import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  logoImg = '../../assets/logo.png';
  techStack = [
    {
      name: 'Angular',
      type: 'Front-end'
    },
    {
      name: 'D3',
      type: 'Front-end'
    },
    {
      name: 'Bootstrap',
      type: 'Front-end'
    },
    {
      name: 'ASP Net',
      type: 'Back-end'
    },
    {
      name: 'Entity Framework',
      type: 'Back-end'
    },
    {
      name: 'Cloudinary',
      type: 'Deployment/Storage'
    },
    {
      name: 'Azure Cloud Platform & Services',
      type: 'Deployment/Storage'
    },
    {
      name: 'SQL Server',
      type: 'Deployment/Storage'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
