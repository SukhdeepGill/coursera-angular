import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES: Dish[] = [
  {
    id: '0',
    name: 'pizza',
    image: '../assets/images/pizza.jpeg',
    category: 'mains',
    featured: true,
    label: 'hot',
    price: '1.99',
    description: 'Delicious pizza'

  },
  {
    id: '1',
    name: 'donuts',
    image: '../assets/images/donuts.jpeg',
    category: 'sweets',
    featured: false,
    label: '',
    price: '1.99',
    description: 'Yummy donuts'

  },

  {
    id: '2',
    name: 'pancakes',
    image: '../assets/images/pancakes.jpeg',
    category: 'mains',
    featured: true,
    label: 'hot',
    price: '2.99',
    description: 'Delicious pancakes'

  },
  {
    id: '3',
    name: 'salad',
    image: '../assets/images/pizza.png',
    category: 'mains',
    featured: true,
    label: '',
    price: '1.99',
    description: 'Delicious salad'

  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;

  selectedDish:Dish = DISHES[0];
  
  constructor() { }

  ngOnInit() {
  }

}
