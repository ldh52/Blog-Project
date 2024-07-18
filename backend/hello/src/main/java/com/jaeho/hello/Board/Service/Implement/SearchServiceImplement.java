package com.jaeho.hello.Board.Service.Implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jaeho.hello.Board.Dto.Response.ResponseDto;
import com.jaeho.hello.Board.Dto.Response.Search.GetPopularListResponseDto;
import com.jaeho.hello.Board.Dto.Response.Search.GetRelationListResponseDto;
import com.jaeho.hello.Board.Repository.SearchLogRepository;
import com.jaeho.hello.Board.Repository.resultSet.GetPopularListResultSet;
import com.jaeho.hello.Board.Repository.resultSet.GetRelationResultSet;
import com.jaeho.hello.Board.Service.SearchService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class SearchServiceImplement implements SearchService{

    private final SearchLogRepository searchLogRepository;

    @Override
    public ResponseEntity<? super GetPopularListResponseDto> getPopularList() {
        
        List<GetPopularListResultSet> resultSets =new ArrayList<>();

        try {
            
            resultSets=searchLogRepository.getPopularList();





        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }


        return GetPopularListResponseDto.success(resultSets);



    }

    @Override
    public ResponseEntity<? super GetRelationListResponseDto> getRelationList(String searchWord) {


        List<GetRelationResultSet> resultSets =new ArrayList<>();

        



        try {

            resultSets =searchLogRepository.getRelationList(searchWord);
            
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
            
        }

        return GetRelationListResponseDto.success(resultSets);
    }
    
}
