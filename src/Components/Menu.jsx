import React from 'react';

export default class Menu extends React.Component{
    //when there is a change in the input, sendData is called.
    //sendData grabs the search value from the input and calls searchResults which 
    //resides in the state in Parent.jsx
    sendData = () => {
       if(document.getElementById('search').value!==null){
        this.props.searchResults (document.getElementById('search').value);
       }
   }
   sendComputers = () => {
     this.props.computerCall();
    }
    sendLicense = () => {
    this.props.licenseCall();
    }




    render(){
        return(
            
                <div className='tab'>
                    <button>Add item to Inventory &nbsp;</button>
                    <button onClick={this.sendComputers}>Computers &nbsp;</button>
                    <button onClick={this.sendLicense}>Licenses&nbsp;</button>
                    <input id ='search'type="text" onChange={this.sendData} placeholder="Search.."></input>
                    
                </div>      
            
            
            
            

        )



    }
}