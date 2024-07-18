package com.jaeho.hello.Board.Service;

import org.springframework.http.ResponseEntity;

import com.jaeho.hello.Board.Dto.Requset.User.PatchNicknameRequestDto;
import com.jaeho.hello.Board.Dto.Requset.User.PatchProfileImageRequestDto;
import com.jaeho.hello.Board.Dto.Response.User.GetSignInUserResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.GetUserResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.PatchNicknameResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.PatchProfileImageResponseDto;

public interface UserService {

    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email);
    ResponseEntity<? super GetUserResponseDto> getUser(String email);

    ResponseEntity<? super PatchNicknameResponseDto> patchNickname(PatchNicknameRequestDto dto, String email);
    ResponseEntity<? super PatchProfileImageResponseDto> patchProfileImage(PatchProfileImageRequestDto dto,String email);
}