import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut, Result } from 'src/app/interfaces/donut';
import { DonutService } from 'src/app/services/donut.service';


@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})


export class DonutDetailComponent implements OnInit {

  donut:Donut | any;

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
    });
  }

}
