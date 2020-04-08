import React from 'react';
import ToggleRender from './ToggleRender'

export default class SearchRender extends React.Component{
    constructor(props){
        super(props);
        this.generateData = this.generateData.bind(this);
    }
    generateData(){
        var res = [];
        if(this.props.filteredData !== null){
             res = this.props.filteredData.map((item, index, arr) => {
                return (
                    <div key={index}>
                        <ToggleRender data={item}/>
                    </div>
                );
            });
            return res
        }
    }
     

render(){
    
    return(

        <div className='dropDown'>
        {this.generateData()}
        </div>

    )

}   
}