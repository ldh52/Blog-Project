import React, { ChangeEvent,KeyboardEvent,forwardRef } from 'react'
import './style.css';
import { Placeholder } from 'react-bootstrap';
// Interface : Input Box 컴포넌트 Propperties 
interface Props{
  label: string;
  type: 'text'|'password';
  placeholder:string;
  error:boolean;
  value:string;
  onChange:(event:ChangeEvent<HTMLInputElement>)=>void;
  icon?:'eye-light-off-icon' | 'eye-light-on-icon' | 'expand-right-light-icon';
  
  
  onButtonClick?:()=>void;

  message?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>)=>void;
}


// component : Input Box 컴포넌트 
const InputBox=forwardRef<HTMLInputElement,Props>((props:Props,ref)=>{

// state: properties
const{ label, type,error,placeholder,value,icon, message} =props;
const{onChange, onButtonClick,onKeyDown}=props;



// event handler: Input 키 이벤트 처리 함수 
const onKeyDownHandler =(event: KeyboardEvent<HTMLInputElement>)=>{

    if(!onKeyDown) return;
    onKeyDown(event);

};

// render: Input Box 컴포넌트 
    return(

        <div className='InputBox'>
                  <div className='InputBox-Label'>{label}</div>
                  <div className={error ?'InputBox-Container-Error' :'InputBox-Container'}>
                            <input ref={ref} type={type} className='Input'placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDownHandler}/>
                            {onButtonClick !==undefined &&
                  <div className='Icon-Button' onClick={onButtonClick}>
                              {icon !==undefined &&
                              <div className={`Icon ${icon}`}></div>}
                                      
                            </div>
                            }
                            
                </div>
                {message !==undefined &&<div className='InputBox-Message'>{message}</div>}
               
        </div>
    
    
     
          )


});



export default InputBox;





