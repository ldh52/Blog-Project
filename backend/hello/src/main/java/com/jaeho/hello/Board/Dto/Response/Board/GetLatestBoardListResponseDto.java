package com.jaeho.hello.Board.Dto.Response.Board;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.jaeho.hello.Board.Common.ResponseCode;
import com.jaeho.hello.Board.Common.ResponseMessage;
import com.jaeho.hello.Board.Dto.Object.BoardListItem;
import com.jaeho.hello.Board.Dto.Response.ResponseDto;
import com.jaeho.hello.Board.Entity.BoardListViewEntity;

import lombok.Getter;

@Getter
public class GetLatestBoardListResponseDto extends ResponseDto{
    

    private List<BoardListItem> latestList;

    private GetLatestBoardListResponseDto(List<BoardListViewEntity> boardEntities){
        super(ResponseCode.SUCCESS,ResponseMessage.SUCCESS);
        this.latestList =BoardListItem.getList(boardEntities);
    }

    public static ResponseEntity<GetLatestBoardListResponseDto> success(List<BoardListViewEntity> boardEntities){
        GetLatestBoardListResponseDto result= new GetLatestBoardListResponseDto(boardEntities);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
