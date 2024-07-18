package com.jaeho.hello.Board.Service;

import org.springframework.http.ResponseEntity;

import com.jaeho.hello.Board.Dto.Requset.Auth.SignInRequestDto;
import com.jaeho.hello.Board.Dto.Requset.Auth.SignUpRequestDto;
import com.jaeho.hello.Board.Dto.Response.Auth.SignInResponseDto;
import com.jaeho.hello.Board.Dto.Response.Auth.SignUpResponseDto;

public interface AuthService {
    
    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);
}
