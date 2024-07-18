import { BoardListItem } from "../../../Types/Interface";
import ResponseDto from "../Response.dto";

export default interface GetLatestBoardListResponseDto extends ResponseDto{
    latestList:BoardListItem[];

}