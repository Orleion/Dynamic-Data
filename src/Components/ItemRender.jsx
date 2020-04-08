import React from 'react';

export default class ItemRender extends React.Component {
    generateCollum(){
    var res=[];
      Object.keys(this.props.data).map((item, index, array) =>{
      res.push(<p>{item}: {this.props.data[item]}</p>)
      });
    return res;
}
    render() {
      
        if(this.props.isHidden ===false){
          return(
              <div className='dropDown'>
                {this.generateCollum()}
          </div>
          )
          }else{

            return null;
          }
    }
  }
  
  