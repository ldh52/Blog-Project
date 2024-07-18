package com.jaeho.hello.Board.Dto.Requset.User;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PatchNicknameRequestDto {
    @NotBlank
    private String nickname;
}
