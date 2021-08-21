import  { createStore } from 'redux';

const initialState = { total: 0 , order: [] , quantity: ()=>{}}

const ReducerFunction = (state = initialState , action) => {

    if(action.type === 'totalInc'){

        return {total: state.total + action.value , quantity: state.quantity , order: state.order}
    }

    if(action.type === 'order'){

        return {order: action.value , quantity: state.quantity , total: state.total}
    }

    if(action.type = 'quantity') {

        return{ quantity: action.value , order: state.order , total: state.total}
    }

    return state;
};

const Store = createStore(ReducerFunction);

export default Store;