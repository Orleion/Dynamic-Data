import React from 'react';
import Menu from './Menu.jsx'
import SearchRender from './SearchRender.jsx'
import TableRender from './TableRender.jsx'


export default class Parent extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
         searchResults: '',
         Data: this.combineData(),
         filteredData: [],
         currentRender:''
         
        }
        this.combineData = this.combineData.bind(this);
        
      }
      selectRender(){

        if(this.state.currentRender==='search'){
          return(<SearchRender filteredData = {this.state.filteredData}/>);
        }
        if(this.state.currentRender==='Licenses'){
          return(<TableRender TableData={this.props.License}/>);


        }
        if(this.state.currentRender==='ComputerTable'){
          return(<TableRender TableData={this.props.Computers}/>);
        }
        



      }
      renderComputers = () =>{

        this.setState({currentRender: 'ComputerTable'})

      }
      renderLicenses = () =>{

        this.setState({currentRender: 'Licenses'})

      }
   
    callbackFunction = (searchQuery) => {
      if(searchQuery!== ""){
        this.setState({currentRender: 'search'});
      var passedFilter = [];
      this.state.Data.map((item, index, array) => {
        var match= false;
        console.log(item);
        Object.keys(item).map((keyName, ind, arr) =>{
          console.log(keyName);
          if (item[keyName].toLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
            match=true;
          }
        });
        if(match===true){
          passedFilter.push(item);
        }
      });
     this.setState({filteredData: passedFilter});
    }else{
      this.setState({filteredData: null});

    }
    
  }

combineData(){
  var res=[]

  for(var x=0; x<this.props.Misc.length; x++){
    res.push(this.props.Misc[x])
    
        }
   for(var y=0; y<this.props.License.length; y++){
    res.push(this.props.License[y])
          
         }
    for(var z=0; z<this.props.Computers.length; z++){
     res.push(this.props.Computers[z])
                
         }

  return res;
}
    render(){
        return(<div>
            
            
      <header >
        
            <Menu licenseCall = {this.renderLicenses}computerCall = {this.renderComputers} searchResults = {this.callbackFunction}/>
      </header>
      <div className="App-header">
       {this.selectRender()}
        </div>
            </div>)

        }






}

// <Hook1 parentCallback  = {this.callbackFunction}/>
//             <Hook2 Hooks ={this.state.search}/>