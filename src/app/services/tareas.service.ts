import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }
  tareas:any[] =[];
  tareaNueva:string ="";

  agregarTarea(){
    this.tareas.push(this.tareaNueva);
    this.tareaNueva = "";
    
  }
  borrartarea(index : number){
    this.tareas.splice(index, 1);
  }
  cambiar(index : number){
  let cambiarTarea = this.tareas[0]
  let tarea = prompt("Como quieres que se llame esta tarea?", cambiarTarea)
  this.tareas.splice(index, 1, tarea);
  
  }
}



