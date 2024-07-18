import { commentListItem } from "../../../Types/Interface";
import ResponseDto from "../Response.dto";

export default interface GetCommentListResponseDto extends ResponseDto{
    commentList: commentListItem[];
}