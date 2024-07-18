package com.jaeho.hello.Board.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jaeho.hello.Board.Entity.BoardEntity;
import com.jaeho.hello.Board.Repository.resultSet.GetBoardResultSet;


@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
   
   boolean existsByBoardNumber(Integer boardNumber);


   BoardEntity findByBoardNumber(Integer boardNumber);
   
   
    //sql 작성 
    @Query(
        value = 
        "SELECT " + 
        "B.board_number AS boardNumber, " +
        "B.title AS title, " +
        "B.content AS content, " +
        "B.write_datetime AS writeDatetime, " +
        "B.writer_email AS writerEmail, " +
        "U.nickname AS writerNickname, " +
        "U.profile_image AS writerProfileImage " +
        "FROM board AS B " +
        "INNER JOIN user AS U " +
        "ON B.writer_email =U.email " +
        "WHERE board_number= ?1 ", // 첫번째 매개변수값을 여기에 집어 넣겠다 라는 의미.
        nativeQuery = true

    )
    
    GetBoardResultSet getBoard(Integer boardNumber);
    
} 
