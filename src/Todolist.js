import React, { Component } from 'react';
import store from './store';
import {add_todo,del_todo} from './actions/index';
import {connect} from 'react-redux';

// class Todolist extends Component {
//     constructor(){
//         super();
//         // this.state={
//         //     list:store.getState().list
//         // }
//         // store.subscribe(()=>{
//         //     this.setState({
//         //         list:store.getState().list
//         //     })
//         // })
//     }

//     handleAdd = (e) =>{
//         if(e.keyCode === 13){
//             this.props.dispatch(add_todo(e.target.value));
//         }
//     }

//     render() {
//         let {list} = this.props;
//         return (
//             <div>
//                 <input onKeyDown={this.handleAdd} type="text"/>
//                 <ul>
//                     {
//                         list.map((item,index)=>(
//                             <li key={index}> {item} </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

let Todolist = ({dispatch,list}) =>{
    let handleAdd = (e) =>{
        if(e.keyCode === 13){
            dispatch(add_todo(e.target.value));
        }
    }
    let handleDel = (index)=>{
        dispatch(del_todo(index))
    }
    return (
        <div>
            <input onKeyDown={handleAdd} type="text"/>
            <ul>
                {
                    list.map((item,index)=>(
                        <li onClick={()=>handleDel(index)} key={index}> {item} </li>
                    ))
                }
            </ul>
        </div>
    )
}


let mapStateToProps = (state) =>{
    return {
        list:state
    }
}


export default connect(mapStateToProps)(Todolist);


