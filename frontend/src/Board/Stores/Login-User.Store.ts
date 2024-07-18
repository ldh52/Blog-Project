import { create } from "zustand";
import { User } from "../Types/Interface";

interface LoginUserStore {
    
    loginUser:User |null;

    setLoginUser: (loginUser:User)=>void;
    resetLoginUser:()=>void;

};

const useLoginUserStore= create<LoginUserStore>(set=>({
    
    loginUser:null,
    setLoginUser:loginUser=> set(state=>({...state,loginUser})),
    resetLoginUser: ()=> set(state=>({...state,loginUser:null}))

}));

export default useLoginUserStore;

//전역적으로 사용하는 상태 변수 

//처음은 null
