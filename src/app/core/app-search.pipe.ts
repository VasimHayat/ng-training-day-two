import { Pipe, PipeTransform } from "@angular/core";
import { Article } from "./models/article";

@Pipe({
    name:'searchPipe',
    pure:true
})
export class AppSearchPipe implements PipeTransform{

    transform(articleArray: Array<Article>,searchKey:string) {

         console.log("DSK")
        if(searchKey && searchKey.trim().length>0){
            return articleArray.filter((item)=>{
                return (item.owner.firstName+" "+item.owner.lastName+" "+item.text).toLocaleLowerCase().includes(searchKey.toLocaleLowerCase());
            })
        }else{
            return articleArray;
        }
    }

}