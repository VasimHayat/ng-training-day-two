import { User } from "./user";

export class Article{
    owner:User;
    id:string;
    image:string;
    publishDate:string;
    text:string;
    link:string;
    likes:number;
    tags:Array<string> = [];

    constructor(article:any){

        this.id= article.id;
        this.image = article.image;
        this.image = article.image;
        this.publishDate = article.publishDate;
        this.text = article.text;
        this.link = article.link;
        this.likes = article.likes;
        this.tags = article.tags;
        this.owner = article.owner;
    } 

}