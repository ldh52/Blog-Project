import { BoardListItem } from "../../../Types/Interface";
import ResponseDto from "../Response.dto";

export default interface GetUserBoardListResponseDto extends ResponseDto{
    userBoardList: BoardListItem[];
}