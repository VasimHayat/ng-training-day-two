export class User{
    id:string;
    firstName:string;
    lastName:string;
    picture:string;
    title:string;
    email:string;
    
    constructor(user:User){
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.picture = user.picture;
        this.title = user.title;
        this.email = user.email;
    }
}