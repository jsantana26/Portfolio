import { CategoryCardsComponent } from './../../components/category-cards/category-cards.component';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-projects-index',
  templateUrl: './projects-index.component.html',
  styleUrls: ['./projects-index.component.css']
})

@NgModule({
  declarations: [CategoryCardsComponent]
})

export class ProjectsIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
