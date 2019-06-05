import * as type from './../constant';

export function getListItem(payload) {
    return ({
        type:type.GET_ITEM_REQUEST,
        payload
            
        
    })
}

export function addItem(payload) {
    return ({
        type:type.POST_ITEM_REQUEST,
        payload
            
        
    })
}

export function updateStatus(payload) {
    console.log(payload)
    return ({
        type:type.PUT_ITEM_REQUEST,
        payload
            
        
    })
}