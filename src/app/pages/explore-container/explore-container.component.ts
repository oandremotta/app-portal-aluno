import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string = "";
  @Input() descricao: string = "";

  constructor() { }

  ngOnInit() { }

}