package com.jaeho.hello.Board.Dto.Response.Auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.jaeho.hello.Board.Common.ResponseCode;
import com.jaeho.hello.Board.Common.ResponseMessage;
import com.jaeho.hello.Board.Dto.Response.ResponseDto;

import lombok.Getter;

@Getter
// extends 키워드: SignUpResponseDto 클래스가 ResponseDto 클래스의 모든 멤버(필드 및 메서드)를 상속받는다는 것을 의미
public class SignUpResponseDto extends ResponseDto{
    
    private SignUpResponseDto(){
        //super는 자바에서 부모 클래스의 생성자나 멤버에 접근하기 위해 사용되는 키워드. 
        //super를 사용하여 부모 클래스의 생성자를 호출하거나 부모 클래스의 멤버에 접근할 수 있음
        //extends는 클래스가 다른 클래스를 상속받음을 나타내고, super는 부모 클래스의 생성자를 호출하거나 부모 클래스의 멤버에 접근

        super(ResponseCode.SUCCESS,ResponseMessage.SUCCESS);
    }

    public static ResponseEntity<SignUpResponseDto> success(){
        SignUpResponseDto result =new SignUpResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);

    }
    public static ResponseEntity<ResponseDto> duplicateEmail(){
        ResponseDto result=new ResponseDto(ResponseCode.DUPLICATE_EMAIL, ResponseMessage.DUPLICATE_EMAIL);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }
    
    public static ResponseEntity<ResponseDto> duplicateNickname(){
        ResponseDto result=new ResponseDto(ResponseCode.DUPLICATE_NICKNAME, ResponseMessage.DUPLICATE_NICKNAME);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }
    public static ResponseEntity<ResponseDto> duplicateTelNumber(){
        ResponseDto result=new ResponseDto(ResponseCode.DUPLICATE_TEL_NUMBER, ResponseMessage.DUPLICATE_TEL_NUMBER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);

    }
}
