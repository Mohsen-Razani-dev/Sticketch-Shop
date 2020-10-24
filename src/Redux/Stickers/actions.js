import {
  ADD_STICKER,
  PLUS_MORE_STICKER,
  DEL_STICKER,
  MINUS_MORE_STICKER, FETCH_STICKERS_REQUEST, FETCH_STICKERS_SUCCESS, FETCH_STICKERS_FAILURE,
} from "./Types";
import axios from 'axios'



export const addSticker = sticker => {
  return {
    type: ADD_STICKER,
    payload: sticker
  };
};
export const plusSticker = id => {
  return {
    type: PLUS_MORE_STICKER,
    payload: {
      id
    }
  };
};
export const minusSticker = id => {
  return {
    type: MINUS_MORE_STICKER,
    payload: {
      id
    }
  };
};
export const deleteSticker = id => {
  return {
    type: DEL_STICKER,
    payload: {
      id
    }
  };
};

export const fetchStickersRequest = () => {
  return {
    type:FETCH_STICKERS_REQUEST
  }
}
export const fetchStickersSuccess = stickers => {
  return {
    type:FETCH_STICKERS_SUCCESS,
    payload:stickers
  }
}
export const fetchStickersfailure = (error) => {
  return {
    type:FETCH_STICKERS_FAILURE,
    payload:error
  }
}
export const fetchStickers = () => {
  return (dispatch) => {
    dispatch(fetchStickersRequest)
    axios.get('http://localhost:9999/StickersShop')
        .then(res => {
          const stickers = res.data
          dispatch(fetchStickersSuccess(stickers))
        })
        .catch(err=>{
          const errMsg = err.message
          dispatch(fetchStickersfailure(errMsg))
        })
  }
}