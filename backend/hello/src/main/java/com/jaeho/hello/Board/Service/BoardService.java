package com.jaeho.hello.Board.Service;

import org.springframework.http.ResponseEntity;

import com.jaeho.hello.Board.Dto.Requset.Board.PatchBoardRquestDto;
import com.jaeho.hello.Board.Dto.Requset.Board.PostBoardRequestDto;
import com.jaeho.hello.Board.Dto.Requset.Board.PostCommentRequestDto;
import com.jaeho.hello.Board.Dto.Response.Board.DeleteBoardResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.GetBoardResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.GetComentListResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.GetFavoriteListResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.GetLatestBoardListResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.GetSearchBoardResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.GetTop3BoardListResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.GetUserBoardListResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.IncreaseViewCountResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.PatchBoardResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.PostBoardResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.PostCommentResponseDto;
import com.jaeho.hello.Board.Dto.Response.Board.PutFavoriteResponseDto;

public interface BoardService {

      ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber);
      ResponseEntity<? super GetFavoriteListResponseDto> getFavoriteList(Integer boardNumber);
      ResponseEntity<? super GetComentListResponseDto> getCommentList(Integer boardNumber);
      ResponseEntity<? super GetLatestBoardListResponseDto> getLatestBoardList();
      ResponseEntity<? super GetTop3BoardListResponseDto>getTop3BoardList();
      ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
      ResponseEntity<? super PostCommentResponseDto> postComment(PostCommentRequestDto dto, Integer boardNumber, String email);
      ResponseEntity<? super PutFavoriteResponseDto> putFavorite(Integer boardNumber,String email);
      ResponseEntity<? super IncreaseViewCountResponseDto> increaseViewCount(Integer boardNumber);
      ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Integer boardNumber, String email);
      ResponseEntity<? super PatchBoardResponseDto> patchBoard(PatchBoardRquestDto dto, Integer boardNumber, String email);
      ResponseEntity<? super GetSearchBoardResponseDto> getSearchBoardList(String searchWord, String preSearchWord);
      ResponseEntity<? super GetUserBoardListResponseDto> getUserBoardList(String email);
} 