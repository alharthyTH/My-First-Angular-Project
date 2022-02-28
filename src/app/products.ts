export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;

}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image:'http://mruanova.com/img/1.jpg'
    
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image:'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/user_mobile_phone.png'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'this phone is cheap',
    image:'https://icons-for-free.com/iconfiles/png/128/phone+telephone+icon-1320087273381945535.png'
  },
  {
    id: 4,
    name: 'Expensive phone',
    price: 1000,
    description: 'this phone is very Expensive',
    image:'https://cdn.iconscout.com/icon/free/png-256/phone-2666572-2212584.png'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/