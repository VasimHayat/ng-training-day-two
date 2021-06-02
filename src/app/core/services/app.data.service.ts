import { Injectable } from "@angular/core";
import { ArticleData } from "../data/article.data";
import { Article } from "../models/article";

@Injectable({
    providedIn:'root'
})
export class AppDataService{

    private articleArray:Array<Article> = [];

    constructor(){
        this.articleArray = ArticleData.data;
    }

    getArticleArray(){
        return this.articleArray;
    }
    
}