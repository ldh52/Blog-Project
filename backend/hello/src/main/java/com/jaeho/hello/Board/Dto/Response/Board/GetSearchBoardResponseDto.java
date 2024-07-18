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
public class GetSearchBoardResponseDto extends ResponseDto {
    
    private List<BoardListItem> searchList;

    private GetSearchBoardResponseDto(List<BoardListViewEntity> boardListViewEntities){
        super(ResponseCode.SUCCESS,ResponseMessage.SUCCESS);
        this.searchList=BoardListItem.getList(boardListViewEntities);
    }

    public static ResponseEntity<GetSearchBoardResponseDto> success(List<BoardListViewEntity> boardListViewEntities){
        GetSearchBoardResponseDto result = new GetSearchBoardResponseDto(boardListViewEntities);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
