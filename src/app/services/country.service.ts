import { Injectable } from '@angular/core';
import { CountryModel } from '../Models/country-model';
import { Observable, ObservableInput } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  private countryList:CountryModel[] = [
    {countryId:1,countryName:"India"},
    {countryId:2,countryName:"USA"},
    {countryId:3,countryName:"UK"},
    {countryId:4,countryName:"Other"},
  ];
  public EditId:ObservableInput<number>;

  public getList():CountryModel[]{
    return this.countryList;
  }

  public getDetails(id:number):CountryModel{
    //this.EditId = id;
    // console.log(id);
    // var data = this.countryList.find(this.findById);
    // console.log(data);
    var data = new CountryModel();
    this.countryList.forEach(element => {
      if(element.countryId==id){
        data = element;
        
      }
    });
    return data;
  }

//   private findById(item:CountryModel){
//     console.log(this.EditId);
// console.log(item);
//     return item.countryId == this.EditId;
//   }
}
