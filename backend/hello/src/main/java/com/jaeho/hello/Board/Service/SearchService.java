package com.jaeho.hello.Board.Service;

import org.springframework.http.ResponseEntity;

import com.jaeho.hello.Board.Dto.Response.Search.GetPopularListResponseDto;
import com.jaeho.hello.Board.Dto.Response.Search.GetRelationListResponseDto;

public interface SearchService {

    ResponseEntity<? super GetPopularListResponseDto> getPopularList();

    ResponseEntity<? super GetRelationListResponseDto> getRelationList(String searchWord);
    
}
