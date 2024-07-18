package com.jaeho.hello.Board.Dto.Requset.Auth;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
// java에서 사용되는 Lombok 라이브러리의 annotation
@Getter 
@Setter
@NoArgsConstructor
public class SignUpRequestDto {
    // 공백 빈문자열 x ,Email형식으로만 
    @NotBlank @Email
    private String email;
    //비밀번호는 8자 이상 20자 이하 
    @NotBlank @Size(min=8,max=20)
    private String password;

    @NotBlank
    private String nickname;
    //Pattern :해당 필드의 값이 특정 패턴에 맞는지를 검증하는데 사용
    //^: 시작 부분을 나타냄,[0-9]: 0부터 9 사이의 숫자 중 하나와 매치, {11,13}: 앞의 패턴이 11에서 13번 반복,$: 끝 부분
    @NotBlank @Pattern(regexp = "^[0-9]{11,13}$")
    private String telNumber;

    @NotBlank 
    private String address;

    private String addressDetail;
    //@NotBlank:CharSequence 타입에만 사용할 수 있음 (String, StringBuilder, CharBuffer, 등),값이 비어있지 않은지 확인할 때
    //@Notnull:모든 타입에 사용할 수 있음 (String, List, Object, 등)값이 null이 아니면 유효하다고 간주,null 여부만을 검사할 때
    @NotNull @AssertTrue //반드시 true일때만 
    private Boolean agreedPersonal; //인증여부 
               
}

