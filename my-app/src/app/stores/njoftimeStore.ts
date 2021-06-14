import { observable,action } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { INjoftimi } from "../models/njoftimi";

class NjoftimeStore{
    @observable njoftimeS:INjoftimi[] = [];
    @observable selectedNjoftim:INjoftimi|undefined;
    @observable LoadingN=false;
    @observable editMode=false;

    @action loadNjoftimet = ()=>{
        this.LoadingN=true;
        agent.Njoftimet.list()
        .then(njoftimeS => {
          njoftimeS.forEach((njoftimet: any)=>{
            njoftimet.dataENjoftimit=njoftimet.dataENjoftimit.split('.')[0]
            this.njoftimeS.push(njoftimet)
          })
        }).finally(()=>this.LoadingN=false);
    }

    @action selectN = (id:string)=>{
        this.selectedNjoftim=this.njoftimeS.find(a=>a.id===id);
        this.editMode=false;
    }
}

export default createContext(new NjoftimeStore());