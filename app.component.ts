import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  filteredArray=[];
  friends;
  constructor(private http:HttpClient){
    this.fetchData();
  }
  
//fetching JSON data
  fetchData(){
  this.http.get('../assets/sample.json').subscribe((res)=>{
      this.filter(res);
    });
  }
  
  
//   filtering the arr based on search input
  search(input){
    if(input){
      var arr1=[];
      this.filteredArray=[];
      var sample = Object.keys(this.friends);
       arr1 = sample.filter((q)=>{
      if(q.toLowerCase().indexOf(input.toLowerCase()) >= 0){
        return q;
      }
      });
      this.filteredArray = arr1.map((m)=>{
        return this.friends[m];
      })
    }else{
      this.filteredArray=[];
    }
  }
  
//   filtering the data for eyeColor,favoriteFruit and friends
  filter(arr){
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
