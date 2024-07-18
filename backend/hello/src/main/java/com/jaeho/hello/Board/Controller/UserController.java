package com.jaeho.hello.Board.Controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jaeho.hello.Board.Dto.Requset.User.PatchNicknameRequestDto;
import com.jaeho.hello.Board.Dto.Requset.User.PatchProfileImageRequestDto;
import com.jaeho.hello.Board.Dto.Response.User.GetSignInUserResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.GetUserResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.PatchNicknameResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.PatchProfileImageResponseDto;
import com.jaeho.hello.Board.Service.UserService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;



    @GetMapping("/{email}")
    public ResponseEntity<? super GetUserResponseDto> getUser(
        @PathVariable("email") String email
    ){
        ResponseEntity<? super GetUserResponseDto> response =userService.getUser(email);
        return response;
    }



    @GetMapping("")
    public ResponseEntity<? super GetSignInUserResponseDto> getSignInUser( @AuthenticationPrincipal String email )
    {
        ResponseEntity<? super GetSignInUserResponseDto> response=userService.getSignInUser(email);    
        return response;
     }

     
     @PatchMapping("/nickname")
     public ResponseEntity<? super PatchNicknameResponseDto> patchNickname(
        @RequestBody @Valid PatchNicknameRequestDto requestBody,
        @AuthenticationPrincipal String email
     ){
        ResponseEntity<? super PatchNicknameResponseDto> response =userService.patchNickname(requestBody, email);
        return response;
     }

     @PatchMapping("/profile-image")
     public ResponseEntity<? super PatchProfileImageResponseDto> patchProfileImage(
        @RequestBody @Valid PatchProfileImageRequestDto requestBody,
        @AuthenticationPrincipal String email
     ){
        ResponseEntity<? super PatchProfileImageResponseDto> response =userService.patchProfileImage(requestBody, email);
        return response;
     }


     
 }
