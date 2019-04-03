import {ADD_TODO_ITEM,DEL_TODO_ITEM} from '../actions/Actiontypes';

let initValue = [1,2,3,4];



export default (state=initValue,action) =>{
    switch(action.type){
        case ADD_TODO_ITEM:
            return [...state,action.value];
        case DEL_TODO_ITEM:
            return state.filter((itme,index)=>{
                return index !== action.index;
            });
            // let newState1 =JSON.parse(JSON.stringify(state));
            // newState1.list.splice(action.index,1);
            // return newState1;
        default:
            return state;
    }
}




// export default (state=0,action)=>{
//     switch(action.type){
//         case "add_item":
//             let newState = JSON.parse()
//             return state+1;
//         case "dec":
//             return state-1;
//         default:
//             return state;
//     }
// }

// let initValue = {
//     list:[1,2,3]
// }

// let todo = (state=initValue,action){
    
// }