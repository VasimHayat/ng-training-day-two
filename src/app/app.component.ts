import { Component, OnInit } from '@angular/core';
import { Article } from './core/models/article';
import { AppDataService } from './core/services/app.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
   private articleArray:Array<Article> = [];
     uiArticleArray:Array<Article> = [];
     searchTerm:string = '';
     orderBy:string;

    constructor(private appDataSvcs:AppDataService){
        this.articleArray = this.appDataSvcs.getArticleArray();
        this.uiArticleArray = [...this.articleArray];
    }

    searchArticle(){
        this.searchTerm = this.searchTerm.trim();
        if(this.searchTerm.length == 0){
            this.uiArticleArray = [...this.articleArray];
        }else{
            this.uiArticleArray = [];
           this.uiArticleArray =  this.articleArray.filter(item =>{ 
                return (item.text+' '+item.owner.firstName+' '+item.owner.lastName).toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());
            }) 
            
        }
    }

    sortArticle(){ 
       this.uiArticleArray.sort(this.orderBy =='name'?this.sortByName:this.sortByText)
    }

    private sortByName(art1:Article,art2:Article){
        if(art1.owner.firstName > art2.owner.firstName){
            return 1
        }else if(art1.owner.firstName <art2.owner.firstName){
            return -1
        }else{
            return 0
        }
    }

    private sortByText(art1:Article,art2:Article){
        if(art1.text > art2.text){
            return 1
        }else if(art1.text <art2.text){
            return -1
        }else{
            return 0
        }
    }
    
}
