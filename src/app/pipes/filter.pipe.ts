import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    
    for(const shoe of value){
  
      if(!arg){
        return value;
      }

      return value.filter(shoe => shoe.name.toLowerCase().includes(arg.toLowerCase()) );


    }
  
  }

}
