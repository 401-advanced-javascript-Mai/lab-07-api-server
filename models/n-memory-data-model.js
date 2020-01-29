'use strict' ;

const uuid = require('uuid/v4');


class Model{
    constructor(){
        this.db=[]
    }

    // get method we need just id , also if i can found id get it else return the db
    get(id){
        let response = id ? this.db.filter((record)=> record.id === id ) : this.db ;
        return Promise.resolve(response);
    }

    //  cretate method need informtion (record )and given id to add to db 
    create(record , id){
        record.id = id ;
        this.db.push(record);
        return Promise.resolve(record);
    }
    
    //  update method need record and id , first get the item with id then make change 
    create(record , id){
        this.db = this.db.map((data) => (data.id === id) ? record : item);
        return Promise.resolve(record);
    }
    
    //  delete item from our database need just id 
    delete(id){
        this.db = this.db.filter((data) => data.id !==id );
        return Promise.resolve();
    }
}


module.exports = Model ;
