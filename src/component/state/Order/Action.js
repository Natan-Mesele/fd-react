import api from "../../config/api";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionType";

export const createOrder = (reqData) => {
    return async (dispatch) => {
      dispatch({ type: CREATE_ORDER_REQUEST });
      try {
        const { data } = await api.post("/api/order", reqData.order, {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        });
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
        console.log("created order", data);
      } catch (error) {
        console.log("catch error", error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
      }
    };
  };

  export const getUsersOrders = (jwt) => {
    return async (dispatch) => {
      dispatch({ type: GET_USERS_ORDERS_REQUEST });
      try {
        const { data } = await api.post(`/api/order/user`, {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        });
        dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data });
        console.log("users order", data);
      } catch (error) {
        console.log("catch error", error);
        dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error });
      }
    };
  };