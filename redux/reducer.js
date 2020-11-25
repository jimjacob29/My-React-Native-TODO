import {ADD,DELETE,COMPLETE} from "./action";
const initState = {
    lists : [{
        id:2,
        label:"Buy Milk1",
        completed:false
      },{
        id:1,
        label:"Buy Meat1",
        completed:true
      }]
};


export default function Reducer(state =initState,action){

    switch(action.type){
        case ADD: {
            const obj={};
            const length = state.lists.length;
            if(length===0){
                obj["id"] = 1;
            }
            else{
                obj["id"]=state.lists[0].id+1;
            }
            obj["label"] = action.payload.label;
            obj["completed"] = false;
            let tempList = [...state.lists];
            tempList.unshift(obj);
            return {
                lists : tempList
            }
        }
        case DELETE : {
            const indexValue = state.lists.findIndex((item)=>item.id===action.payload.id);
            const tempList = [...state.lists];
            tempList.splice(indexValue,1);
            return{
                lists:tempList
            }
        }
        case COMPLETE:{
            const indexValue = state.lists.findIndex((item)=>item.id===action.payload.id);
            const tempList = [...state.lists];
            tempList[indexValue].completed= !tempList[indexValue].completed;
            return{
                lists : tempList
            }

        }
        default:
            return state;
    }
}