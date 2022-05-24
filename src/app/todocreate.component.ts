import { Component, Input } from "@angular/core";
import { TodoApp } from "./todo.service";



export class task{
    id:number=0;
    date:Date|any;
    title:string='';
    desc:string='';
    status:string="pending";
}
@Component({
    selector:"tdl-create",
    templateUrl:"./todocreate.component.html",
    providers: [TodoApp]
    
})

export class TodoCreate{

    constructor(private td:TodoApp){  } //Creting object of service
    date:any|Date;
    title:any|string;
    desc:any|string;
    arr:task[]=[]
    


    create(){

        if(new Date(this.date).getDate()<new Date().getDate()){alert("Past date is not allowed")}
        
        else{ this.td.create(this.date,this.title,this.desc)
            this.title=''
            this.desc=''
            this.date=''
        }}
       

    
    queued(){
        return this.td.queued()
        
    }

    today(){
       return this.td.today()
    }

    tomorrow(){
        return this.td.tommorow()
    }

    completed(){
        return this.td.completed()
    }

    qstatus(n:number){
        
        this.td.status(n)
        
      
    }

    tdstatus(n:number){
        
        this.td.status(n)
        
    }

    tmstatus(n:number){
        
        this.td.status(n)
    }

    remove(n:number){
        this.td.remove(n)
    }

}