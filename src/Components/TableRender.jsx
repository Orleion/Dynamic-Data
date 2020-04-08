import React from 'react';

export default class TableRender extends React.Component{
    constructor(props){
        super(props);
        
        this.generateCollum = this.generateCollum.bind(this);
        this.generateRow = this.generateRow.bind(this);
        this.connectRow = this.connectRow.bind(this);
      }

generateCollum(){
    var res=[];
    Object.keys(this.props.TableData[0]).map((item, index, array) => {
        res.push(<th key={item}>{item}</th>)
});
    return res;
}
connectRow(){
    var res = [];
    this.props.TableData.map((item, index, array) => {
    res.push(<tr>{this.generateRow(item)}</tr>)
        
        
    });
    return res;
}

generateRow(item){
var res = [];
Object.keys(item).map((keyName, ind, arr)=>{
    res.push(<td key={keyName}>{item[keyName]}</td>)
    


});
return res;
}



    render(){
        return(
            <div>
          <table id = "table">
         <thead>
             
             {this.generateCollum()}
             
         </thead>
         <tbody>
             
             {this.connectRow()}
             
         </tbody>
         </table>
      </div>
        )
    }
}