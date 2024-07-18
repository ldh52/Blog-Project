package com.jaeho.hello.Board.Dto.Response.Board;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.jaeho.hello.Board.Common.ResponseCode;
import com.jaeho.hello.Board.Common.ResponseMessage;
import com.jaeho.hello.Board.Dto.Object.CommentListItem;
import com.jaeho.hello.Board.Dto.Response.ResponseDto;
import com.jaeho.hello.Board.Repository.resultSet.GetCommentListResultSet;

import lombok.Getter;

@Getter
public class GetComentListResponseDto extends ResponseDto{
    
    private List<CommentListItem> commentList;

    private GetComentListResponseDto(List<GetCommentListResultSet> resultSets){
        super(ResponseCode.SUCCESS,ResponseMessage.SUCCESS);
        this.commentList =CommentListItem.copyList(resultSets);
    }

    public static ResponseEntity<GetComentListResponseDto> success(List<GetCommentListResultSet> resultSets){
        GetComentListResponseDto result =new GetComentListResponseDto(resultSets);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    public static ResponseEntity<ResponseDto> noExistBoard(){
        ResponseDto result= new ResponseDto(ResponseCode.NOT_EXISTED_BOARD,ResponseMessage.NOT_EXISTED_BOARD);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

}
