import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut, Result } from 'src/app/interfaces/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  donut:Donut | any;

  addtodonutsList:string[] = [];

  Calories: number = 0;

  total: number = 1;

  constructor(private service:DonutService, private route:ActivatedRoute) {


   }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params)=>{
      this.getDonutDetail(String(params.get("id")));
    });
  }

 //  function to get Donut Detail by Id using subscribe in here and observable in services
  getDonutDetail(id:string){
    this.service.getDonutDetail(id).subscribe((data)=>{
      this.donut = data;
  //    this.addtodonutsList.push(this.donut);

    });
  }



  removeDonut(id:any){
   // this.addtodonutsList=this.addtodonutsList.splice(id,1);
   //this.addtodonutsList=this.donut.splice(id,1);  
      }    
     
  caloriesTotal() {
   //for(var i=0; i<this.addtodonutsList.length; i++) {
     this.Calories = this.donut.calories;
   // }
   }

   totalPrice() {
     for(var i=1; i<this.addtodonutsList.length; i++){
    this.total += i*1;

    }
   }    

  }

