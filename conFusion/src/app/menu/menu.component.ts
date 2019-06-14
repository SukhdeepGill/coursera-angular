import { Component, OnInit } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  selectedDish: Dish;

  constructor() { }

  ngOnInit() {
  }


  onSelect(dish: Dish){
    console.log(dish.name)
    this.selectedDish = dish;
    console.log(this.selectedDish.name)
  }

}
