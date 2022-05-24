
import { Injectable } from "@angular/core";


export class Task{
    id:number=0;
    date:Date|any;
    title:string='';
    desc:string='';
    status:string="pending";
}

@Injectable()
export class TodoApp{

    arr:Task[]=[]
    

    constructor(){
       
    }

    id=1
    create(date:Date,title:string,desc:string){
        
        let ar:Task=new Task()
        ar.date=new Date(date).toLocaleDateString()
        ar.title=title
        ar.desc=desc
        ar.id=this.id++
        this.arr.push(ar)
        
        
        
    }

    today():Task[]{
     return this.arr.filter((elem)=>elem.date==new Date().toLocaleDateString() && elem.status!='done');   
    }

    tommorow(){
        return this.arr.filter((elem)=>new Date(elem.date).getTime()==(new Date(new Date().toLocaleDateString()).getTime()+ 24 * 60 * 60 * 1000) && elem.status!='done')

    }

    queued():Task[]{
        //let rr:Task[]= this.arr.filter((elem)=>new Date(elem.date).getTime()!=(new Date(new Date().toLocaleDateString()).getTime()+ 24 * 60 * 60 * 1000) && elem.date!=new Date().toLocaleDateString() )
      
        //return this.arr.sort((a,b)=>{return new Date(a.date).getTime()-new Date(b.date).getTime()})
        return this.arr.filter((elem)=>new Date(elem.date).getTime()!=(new Date(new Date().toLocaleDateString()).getTime()+ 24 * 60 * 60 * 1000) && elem.date!=new Date().toLocaleDateString() && elem.status!='done' ).sort((a,b)=>{return new Date(a.date).getTime()-new Date(b.date).getTime()})
        
    }

    completed():Task[]{
        return this.arr.filter((elem)=>elem.status=='done');  
    }

    status(n:number){
        
            //this.arr.filter((elem)=>new Date(elem.date).getTime()!=(new Date(new Date().toLocaleDateString()).getTime()+ 24 * 60 * 60 * 1000) && elem.date!=new Date().toLocaleDateString() )[n].status='done'
            //this.arr[n].status="done"
            //this.arr.filter((elem)=>elem.id==n)[0].status='done'
           let  m=this.arr.findIndex((ele)=>ele.id==n)
           this.arr[m].status="done"

        
        
    }


    remove(n:number){
        //let i=this.arr.findIndex((elem)=>elem.id=n)
        this.arr=this.arr.filter((elem)=>elem.id!=n)
    }



 }