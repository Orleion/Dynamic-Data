import React from 'react';
import ItemRender from './ItemRender.jsx';

export default class ToggleRender extends React.Component{

    constructor(props){
        super(props);
        this.state={
         isHidden: true,
         arrowDirection:'→',
        }
        this.toggleHidden = this.toggleHidden.bind(this);
        this.toggleArrow = this.toggleArrow.bind(this);
    }
    toggleHidden () {
        this.toggleArrow()
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
      toggleArrow(){
        if(this.state.isHidden===true){
            this.setState({
                arrowDirection: '↓'
              })


        }else{
            this.setState({
                arrowDirection: '→'
              })


        }


      }
render(){

    return(
     <div>
        <a onClick={this.toggleHidden}>{this.state.arrowDirection} {this.props.data.name}</a>
        <div><ItemRender isHidden={this.state.isHidden} data={this.props.data}/></div>
        <br></br>
    </div>

      

    )


}







}