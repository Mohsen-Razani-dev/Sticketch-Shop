import react from "react";
import {
  ADD_STICKER,
  DEL_STICKER,
  FETCH_STICKERS_FAILURE,
  FETCH_STICKERS_REQUEST,
  FETCH_STICKERS_SUCCESS,
  MINUS_MORE_STICKER,
  PLUS_MORE_STICKER
} from "./Types";
import { message } from "antd";

let initialSticker = {
  allStickers: [],
  purchasesItem: [],
  loading: false,
  error: ""
};

const reducer = (state = initialSticker, action) => {
  switch (action.type) {
    case FETCH_STICKERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_STICKERS_SUCCESS:
      return {
        ...state,
        loading: false,
        allStickers: action.payload,
        error: ""
      };
    case FETCH_STICKERS_FAILURE:
      return {
        ...state,
        loading: false,
        allStickers: [],
        error: action.payload
      };
    case ADD_STICKER:
      const existItem = state.purchasesItem.find(
        item => item.id === action.payload.id
      );
      if (!existItem) {
        message.success(`Added ${action.payload.name} Sticker in Shoping Cart`);
        return {
          ...state,
          purchasesItem: [
            ...state.purchasesItem,
            {
              id: action.payload.id,
              name: action.payload.name,
              cost: action.payload.cost,
              img: action.payload.img,
              number: action.payload.number
            }
          ]
        };
      } else {
        return {
          ...state,
          purchasesItem: state.purchasesItem.map(i => {
            if (i.id === action.payload.id) {
              return {
                id: i.id,
                name: i.name,
                cost: i.cost,
                img: i.img,
                number: i.number + 1
              };
            } else {
              return i;
            }
          })
        };
      }


    case DEL_STICKER:
      const myItemDel = state.purchasesItem.filter(item => item.id === action.payload.id)
      message.error(`Remove ${myItemDel[0].name} Sticker from Shoping Cart`);
      return {
        ...state,
        purchasesItem: state.purchasesItem.filter(item => item.id !== action.payload.id)
      };

    case PLUS_MORE_STICKER:
      const { id } = action.payload;
      return {
        ...state,
        purchasesItem: state.purchasesItem.map(i => {
          if (i.id === id) {
            return {
              id: i.id,
              name: i.name,
              cost: i.cost,
              img: i.img,
              number: i.number + 1
            };
          } else {
            return i;
          }
        })
      };
    case MINUS_MORE_STICKER:
      return {
        ...state,
        purchasesItem: state.purchasesItem.map(i => {
          if (i.id === action.payload.id) {
            return {
              id: i.id,
              name: i.name,
              cost: i.cost,
              img: i.img,
              number: i.number > 1 ? i.number - 1 : 1
            };
          } else {
            return i;
          }
        })
      };
    default:
      return state;
  }
};
export default reducer;
