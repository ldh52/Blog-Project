package com.jaeho.hello.Board.Controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jaeho.hello.Board.Dto.Requset.Auth.SignInRequestDto;
import com.jaeho.hello.Board.Dto.Requset.Auth.SignUpRequestDto;
import com.jaeho.hello.Board.Dto.Response.Auth.SignInResponseDto;
import com.jaeho.hello.Board.Dto.Response.Auth.SignUpResponseDto;
import com.jaeho.hello.Board.Service.AuthService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthService authService;

    @PostMapping("/sign-up")
    public ResponseEntity<? super SignUpResponseDto> signUp(
    @RequestBody @Valid SignUpRequestDto requestBody

    ){
        ResponseEntity<? super SignUpResponseDto> response= authService.signUp(requestBody);
        return response;
    }
    @PostMapping("/sign-in")
    public ResponseEntity<? super SignInResponseDto> signIn(
        @RequestBody @Valid SignInRequestDto requestBody
    ){
        ResponseEntity<? super SignInResponseDto> response= authService.signIn(requestBody);
        return response;
    }
}
