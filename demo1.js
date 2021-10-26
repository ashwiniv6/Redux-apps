const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore=redux.createStore
const applyMiddleware= redux.applyMiddleware
const logger = reduxLogger.createLogger()

const intialState={
    noOfIcecreams:20,
    noOfpizza:50
}

// const pizzaIntialState={
//     noOfpizza:50
// }

const Buy_icecream = "Buy_icecream"
const Buy_pizza = "Buy_pizza"

function buyIcecream(){
    return{
        type:Buy_icecream
    }
}

function buyPizza(){
    return{
        type:Buy_pizza
    }
}
const reducer =(state=intialState,action)=>
{
    switch(action.type){
        case Buy_icecream:
            {
                return{
                    ...state,
                    noOfIcecreams:state.noOfIcecreams-1
                }
            }
        case Buy_pizza:
            {
                return {
                    ...state,
                    noOfpizza:state.noOfpizza-1
                }
            }    
    }
}

const store =createStore(reducer,applyMiddleware(logger))
console.log('initialState:',store.getState())
store.subscribe(()=>{})

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

store.dispatch(buyPizza())
store.dispatch(buyPizza())
store.dispatch(buyPizza())



