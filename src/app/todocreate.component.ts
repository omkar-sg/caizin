import { Component, Input } from "@angular/core";
import { TodoApp } from "./todo.service";


@Component({
    selector:"tdl-create",
    templateUrl:"./todocreate.component.html"
})

export class TodoCreate{

    constructor(private td:TodoApp){  } //Creting object of service
    date:any|Date;
    title:any|string;
    desc:any|string;
    
    


    create(){
        
        this.td.create(this.date,this.title,this.desc)
    }

    
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