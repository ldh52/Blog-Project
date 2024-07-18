package com.jaeho.hello.Board.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.jaeho.hello.Board.Dto.Requset.Auth.SignUpRequestDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="user")
@Table(name="user")
public class UserEntity {

    @Id
    private String email;
    private String password;    
    private String nickname;
    private String telNumber;
    private String address;
    private String addressDetail;
    private boolean agreedPersonal;
    private String profileImage;

    public UserEntity(SignUpRequestDto dto){

    this.email=dto.getEmail();
    this.password=dto.getPassword();    
    this.nickname=dto.getNickname();
    this.telNumber=dto.getTelNumber();
    this.address=dto.getAddress();
    this.addressDetail=dto.getAddressDetail();
    this.agreedPersonal=dto.getAgreedPersonal();
    }

    public void setNickname(String nickname){
        this.nickname =nickname;
    }
    public void setProfileImage(String profileImage){
        this.profileImage=profileImage;
    }
}
