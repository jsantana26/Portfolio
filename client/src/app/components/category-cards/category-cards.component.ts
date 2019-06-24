import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css']
})
export class CategoryCardsComponent implements OnInit {
  @Input('language') language: string;
  @Input('description') description: string;
  @Input('color') color: string;
  @Input('imgSrc') imgSrc: string;

  constructor() {
  }

  ngOnInit() {
  }

}
