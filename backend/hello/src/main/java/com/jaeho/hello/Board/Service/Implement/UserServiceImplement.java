package com.jaeho.hello.Board.Service.Implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jaeho.hello.Board.Dto.Requset.User.PatchNicknameRequestDto;
import com.jaeho.hello.Board.Dto.Requset.User.PatchProfileImageRequestDto;
import com.jaeho.hello.Board.Dto.Response.ResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.GetSignInUserResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.GetUserResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.PatchNicknameResponseDto;
import com.jaeho.hello.Board.Dto.Response.User.PatchProfileImageResponseDto;
import com.jaeho.hello.Board.Entity.UserEntity;
import com.jaeho.hello.Board.Repository.UserRepository;
import com.jaeho.hello.Board.Service.UserService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService{

    private final UserRepository userRepository;
    
    @Override
    public ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email) {

        UserEntity userEntity =null;

        try {
            
        userEntity=userRepository.findByEmail(email);
        if(userEntity==null) return GetSignInUserResponseDto.notExistUser();
        


            
        } catch (Exception exException) {
            exException.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetSignInUserResponseDto.success(userEntity);
    }

    @Override
    public ResponseEntity<? super GetUserResponseDto> getUser(String email) {
        UserEntity userEntity =null;

        try {


            userEntity = userRepository.findByEmail(email);
            if(userEntity ==null) return GetUserResponseDto.noExistUser(); 
            
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetUserResponseDto.success(userEntity);
    }

    @Override
    public ResponseEntity<? super PatchNicknameResponseDto> patchNickname(PatchNicknameRequestDto dto, String email) {
        try {

            UserEntity userEntity =userRepository.findByEmail(email);
            if(userEntity ==null) PatchNicknameResponseDto.noExistUser();

            String nickname =dto.getNickname();
            boolean existedNickname =userRepository.existsByNickname(nickname);
            if(existedNickname) return PatchNicknameResponseDto.duplicateNickname();

            userEntity.setNickname(nickname);
            userRepository.save(userEntity);

            
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return PatchNicknameResponseDto.success();
    }

    @Override
    public ResponseEntity<? super PatchProfileImageResponseDto> patchProfileImage(PatchProfileImageRequestDto dto,String email) {
        try {
            
            UserEntity userEntity =userRepository.findByEmail(email);
            if(userEntity ==null) return PatchProfileImageResponseDto.noExistUser();

            String profileImage=dto.getProfileImage();
            userEntity.setProfileImage(profileImage);
            userRepository.save(userEntity);

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return PatchProfileImageResponseDto.success();
    }

    
    
}
