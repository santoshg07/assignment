import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { read } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arr=[];
  arr1=[];
  friends;
  constructor(private http:HttpClient){
    this.http.get('../assets/sample.json').subscribe((res)=>{
      this.a(res);
    });
  }
  b(a){
    if(a){
      var arr1=[];
      this.arr1=[];
      var sample = Object.keys(this.friends);
       arr1 = sample.filter((q)=>{
      if(q.toLowerCase().indexOf(a.toLowerCase()) >= 0){
        return q;
      }
      });
      this.arr1 = arr1.map((m)=>{
        return this.friends[m];
      })
    }else{
      this.arr1=[];
    }
  }
  a(arr){

this.arr = arr;
    var color ={};
    arr.forEach(element => {
      if(!color[element['eyeColor']]){
        color[element['eyeColor']] = 1;
      }else{
        color[element['eyeColor']] = color[element['eyeColor']] + 1;
      }
    });
    console.log('eyeColor : ',color);
    var fruits ={};
    arr.forEach(element => {
      if(!fruits[element['favoriteFruit']]){
        fruits[element['favoriteFruit']] = 1;
      }else{
        fruits[element['favoriteFruit']] = fruits[element['favoriteFruit']] + 1;
      }
    });
    console.log('favoriteFruit : ',fruits);
    // console.log(arr);
const friends = {};
    arr.forEach(element => {
      element.friends.forEach(frd => {
        if(!friends[frd['name']]){
          friends[frd['name']] = [element['name']];
        }else{
          friends[frd['name']].push(element['name']);
        }
      });
    });
    console.log('friends : ',friends);
    this.friends = friends;
    console.log(arr);
  }
}
