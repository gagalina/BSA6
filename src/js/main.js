import '../css/style.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import pug from '../../pug.jpg';
import userFunction from './file';
import userList from './userList';


const users = [
    {avatar: pug, name: 'Oksana', age: 22},
    {avatar: pug, name: 'Viktor', age: 14},
    {avatar: pug, name: 'Ivan', age: 37},
    {avatar: pug, name: 'Yana', age: 45},
    {avatar: pug, name: 'Oleksandr', age: 19},
    {avatar: pug, name: 'Olena', age: 18},
    {avatar: pug, name: 'Mykola', age: 27},
    {avatar: pug, name: 'Andriy', age: 33},
    {avatar: pug, name: 'Zakhar', age: 40}
];


userFunction();

let userListModule = new userList(users);
userListModule.showList();