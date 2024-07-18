



//액션
export const increase=()=>({type:"INCREMENT"});

export const decrease=()=>({type:"DECREMENT"});

//상태

const initstate={
    number:1,
    

}
//액션 결과를 걸러내는
const reducer=(state=initstate,action)=>{
    switch(action.type){
        case"INCREMENT":
            return{number:state.number+1}; //return되면 호출하는 쪽에서 받는게 아니라 return 되는 순가 ui 변경
        case"DECREMENT":
            return{number:state.number-1};
        default:
            return state;
    }
}

export default reducer