const redux=require('redux')

console.log("Welcome to js app")

const Buy_ticket = "Buy_ticket"

const intialState={
    noOfTickets: 30
}
//action creator :it is a function which returns an Action
function buyTicket()
{
    return{
    type:Buy_ticket
    }
}
//reducer:s
const reducer=(state=intialState,action)=>
{
    switch(action.type){
        case Buy_ticket:
            {
                return {
                    noOfTickets:state.noOfTickets-1
                }
            }
        default:
            {
            return state
        }    
    }
}

