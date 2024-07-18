package com.jaeho.hello.Board.Common;

public interface ResponseCode {
//interface 에서 모든 변수는 public static final로 인식함  
// final 값을 변견할 수 없는 
//HTTP Status 200
 String SUCCESS ="SU";

//HTTP Status 400
 String VALIDATION_FAILED ="VF";
 String DUPLICATE_EMAIL ="DE";
 String DUPLICATE_NICKNAME="DN";
 String DUPLICATE_TEL_NUMBER="DT"; 
 String NOT_EXISTED_USER="NU";
 String NOT_EXISTED_BOARD="NB";

//HTTP Status 401
String SIGN_IN_FAIL="SF";
String AUTHORIZATION_FAIL="AF";

//HTTP Status 403
String NO_PERMISSION="NP";

//HTTP Status 500
String DATARBASE_ERROR="DBE";




}
