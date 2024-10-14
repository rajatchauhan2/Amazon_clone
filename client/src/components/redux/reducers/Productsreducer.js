const products = []


export const getProductsredcer = (state,action)=>{
switch(action.type){
    case 'SUCCESS_GET_PRODUCTS':
        return {products : action.payload}
        case 'FAIL_GET_PRODUCTS':
            return {error : action.payload}
            default: return state
}
}