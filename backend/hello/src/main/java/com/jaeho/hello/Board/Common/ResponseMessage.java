package com.jaeho.hello.Board.Common;

public interface ResponseMessage {
    
//HTTP Status 200
  String SUCCESS ="Sucess";

//HTTP Status 400
  String VALIDATION_FAILED ="Validation Failed";
  String DUPLICATE_EMAIL ="Duplicate Email";
  String DUPLICATE_NICKNAME="Duplicate Nickname";
  String DUPLICATE_TEL_NUMBER="Duplicate Tel Number"; 
  String NOT_EXISTED_USER="This user Does Not Exist";
  String NOT_EXISTED_BOARD="This Board Does Not Exist";
 
//HTTP Status 401
  String SIGN_IN_FAIL="Login Information Mismatch";
  String AUTHORIZATION_FAIL="Authorization Faild";
 
//HTTP Status 403
  String NO_PERMISSION="Do Not Have Permission";
 
//HTTP Status 500
  String DATARBASE_ERROR="Database Error";
 

}
