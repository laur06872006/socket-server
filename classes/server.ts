
import express, { Router } from "express";

import { SERVER_PORTS } from "../globals/environment";


export default class Server{

    public app: express.Application;
    private PORT:number;

    constructor(){
        this.app= express();
        this.PORT= SERVER_PORTS;
    }
    

    getPort():number{
        return this.PORT;
    }


    start(){
        this.app.listen( this.PORT, () =>{
            console.log(`Servidor iniciado en el puerto ${this.PORT}`)
        }) 
    }
}