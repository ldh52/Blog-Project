import { favoriteListItem } from "../../../Types/Interface";
import ResponseDto from "../Response.dto";

export default interface GetFavoriteListResponseDto extends ResponseDto{
    favoriteList: favoriteListItem[];
    
}