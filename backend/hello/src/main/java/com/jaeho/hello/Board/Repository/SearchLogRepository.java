package com.jaeho.hello.Board.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jaeho.hello.Board.Entity.SearchLogEntity;
import com.jaeho.hello.Board.Repository.resultSet.GetPopularListResultSet;
import com.jaeho.hello.Board.Repository.resultSet.GetRelationResultSet;

@Repository
public interface SearchLogRepository extends JpaRepository<SearchLogEntity,Integer> {
    
@Query(
    value=
    "SELECT search_word as searchWord, count(search_word) AS count "+
    "FROM search_log "+
    "GROUP BY search_word "+
    "ORDER BY count DESC "+
    "LIMIT 15 ",
    nativeQuery=true
)
List<GetPopularListResultSet> getPopularList();

@Query(
    value = 
    "SELECT relation_word as searchWord, count(relation_word) AS count "+
    "FROM search_log "+
    "WHERE search_word =? "+
    "AND relation_word IS NOT NULL "+
    "GROUP BY relation_word "+
    "ORDER BY count DESC "+
    "LIMIT 15 ",
    nativeQuery=true
)
 List<GetRelationResultSet> getRelationList(String searchWord);
}
