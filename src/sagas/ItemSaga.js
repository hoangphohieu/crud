import {put,takeEvery} from 'redux-saga/effects';
import getItems from './../fetchAPI/getItems';
import postItem from './../fetchAPI/postItem';
import putItem from './../fetchAPI/putItem';
import * as type  from './../constant';
function* getListItem(params) {
    try {
        const res= yield getItems();
        yield put({
            type:type.GET_ITEM_SUCSESS,
            payload: res
        })
    } catch (error) {
        yield put ({
            type:type.GET_ITEM_RFAILURE,
            payload: {
                errorMessage:error.Message
            }
        })
    }
    
}

function* postItemToList(params) {
    console.log(params)
    try {
        const res= yield postItem(params);
        yield put({
            type:type.POST_ITEM_SUCSESS,
            payload: res
        })
    } catch (error) {
        yield put ({
            type:type.POST_ITEM_RFAILURE,
            payload: {
                errorMessage:error.Message
            }
        })
    }
    
}


function* updateItem(params) {
    try {
        const res= yield putItem(params);
        yield put({
            type:type.PUT_ITEM_SUCSESS,
            payload: res
        })
    } catch (error) {
        yield put ({
            type:type.PUT_ITEM_RFAILURE,
            payload: {
                errorMessage:error.Message
            }
        })
    }
    
}
export const IteamSaga=[
    takeEvery(type.GET_ITEM_REQUEST, getListItem),
    takeEvery(type.POST_ITEM_REQUEST, postItemToList),
    takeEvery(type.PUT_ITEM_REQUEST, updateItem),


];  