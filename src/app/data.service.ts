import { IusersDetails } from './app-types';
import { Injectable } from "@angular/core";
import { userDetails } from './mockbackend';

@Injectable({
    providedIn:'root'
})

export class DataService{
    constructor(){}

    formData!:IusersDetails;
    index:number=0;
    

    setData(userIndex:number){
        this.index=userIndex;
        this.formData=userDetails[this.index];
    }

    getData(){
        return this.formData;
    }

    deleteUser(position:number){
        userDetails.splice(position, 1);
        localStorage.setItem('details', JSON.stringify(userDetails));
    }
    updateData(updatedData:any){
        if(this.index==0) userDetails.push(updatedData);
        else userDetails[this.index]=updatedData; 
        localStorage.setItem('details', JSON.stringify(userDetails));
    }

    searchData(searchValue:string){

        console.log('searching',searchValue );
        let details=localStorage.getItem('details');
        console.log(details);
        if(details){
           let detailsArray=JSON.parse(details)
           let resultArray:any=[]
            detailsArray.forEach((user:any)=>{
                console.log('user',user);
                for(let key in user){
                    
                    if(user[key]==searchValue){
                        resultArray.push(user);
                        
                        
                        localStorage.setItem('details',JSON.stringify(resultArray))
                    }
                }
            })
        }
        }
}

