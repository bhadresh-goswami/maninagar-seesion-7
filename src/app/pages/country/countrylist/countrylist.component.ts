import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../services/country.service';
import { CountryModel } from '../../../Models/country-model';
@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  list:CountryModel[] = [];
  constructor(private countryServ:CountryService) { 

  


  }

  ngOnInit() {
    console.log(this.countryServ.getList());
    this.list = this.countryServ.getList();
  }

}
