import { Component } from "@angular/core";

@Component({
    selector:"tdl-todo"
})

export class TodoApp1{
    constructor(){
        type td={title:string;desc:string}
        const mp =new Map<string,td>();
    }

}
