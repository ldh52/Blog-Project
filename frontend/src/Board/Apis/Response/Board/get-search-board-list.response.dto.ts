import { BoardListItem } from "../../../Types/Interface";
import ResponseDto from "../Response.dto";

export default interface GetSearchBoardListResponseDto extends ResponseDto{
    searchList: BoardListItem[];
}