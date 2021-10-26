const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore=redux.createStore
const applyMiddleware= redux.applyMiddleware
const logger = reduxLogger.createLogger()

const cakeInitialState={
    noOfCakes:20,
    
}

const pizzaIntialState={
    noOfpizza:50
}

const Buy_cake = "Buy_cake"
const Buy_pizza = "Buy_pizza"

function buyCake(){
    return{
        type:Buy_cake
    }
}

function buyPizza(){
    return{
        type:Buy_pizza
    }
}
const cakerReducer =(state=cakeIntialState,action)=>
{
    switch(action.type){
        case Buy_cake:
            {
                return{
                    ...state,
                    noOfIceCakes:state.noOfCakes-1
                }
            }
        default:
            {
                return state
            }
}
const cakerReducer =(state=cakeIntialState,action)=>
            {
                switch(action.type){                
        case Buy_pizza:
            {
                return {
                    ...state,
                    noOfpizza:state.noOfpizza-1
                }
            }    
    }
}

const store =createStore(rootReducer,applyMiddleware(logger))
console.log('InitialState:',store.getState())
store.subscribe(()=>{})

store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyPizza())
store.dispatch(buyPizza())
store.dispatch(buyPizza())


}
