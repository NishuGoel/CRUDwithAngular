
import {User} from './user-data';
//import { Details } from './ProductDetails';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserFetch } from './user-fetch';


export class UserData implements InMemoryDbService {
  createDb(){
    const users: User[] = [
      { id: 1, name: 'Pen', model: 'v1', price: '0000000000'  },
      { id: 2, name: 'Pencil', model: 'A3', price: '1111111111'  },
      { id: 3, name: 'Table', model: 'N8', price: '2222222222'  },
      { id: 4, name: 'Chair', model: 'M9', price : '6666666666' },
      { id: 5, name: 'Bed', model: 'PZ', price: '9909999999'  }

    ];
    const user: UserFetch[]=[
      {
        id:1,
        name: 'Pen',
        model: 'AB'
      },
      {
       id:2,
       name: 'Pencil',
       model: 'CD'
     }    ,
     {
       id:3,
       name: 'Table',
       model: 'FG'
     }    ,
     {
       id:4,
       name: 'Chair',
       model: 'IJ'
     } ,
     {
       id:5,
       name: 'Bed',
       model: 'XZ'
     }
     ];

    // const details: Details[]=[
    //  {
    //    id: 1,
    //    name: 'Pen',
    //    model: 'v1',
    //    price: '30',
    //    InStock: 'Yes'

    //  },
    //  {
    //   id: 2,
    //   name: 'Pencil',
    //   model: 'A3',
    //   price: '20',
    //   InStock: 'Yes'
    // }    ,
    // {
    //   id: 3,
    //   name: 'Table',
    //   model: 'N8',
    //   price: '300',
    //   InStock: 'Yes'

    // }    ,
    // {
    //   id: 4,
    //   name: 'Chair',
    //   model: 'M9',
    //   price: '315',
    //   InStock: 'Yes'

    // } ,
    // {
    //   id: 5,
    //   name: 'Bed',
    //   model: 'PZ',
    //   price: '1000',
    //   InStock: 'Yes'

    // }
    // ];
    return {users, user};
  }
}
