const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore=redux.createStore
const applyMiddleware= redux.applyMiddleware
const logger = reduxLogger.createLogger()

const intialState = {
    noOfTickets :50
}

const BUY_TICKET ="BUY_TICKET"

function buyTicket(count){
    return{
        type:BUY_TICKET,
        payload:count,
        info:"Buy Ticket Online and get attractive Discounts!"
    }
}

const ticketReducer=(state=intialState,action)=>{
    switch(action.type){
        case BUY_TICKET:
            return{
                ...state,
                noOfTickets:state.noOfTickets-action.payload
            }
            default:
                return state
    }
}


const store=createStore(ticketReducer,applyMiddleware(logger))
console.log('initialState:',store.getState())
store.subscribe(()=>{})

store.dispatch(buyTicket(5))
store.dispatch(buyTicket(10))
