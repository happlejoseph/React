

const initialState = {count: 0}

const conuterReducer = (state = initialState, action)=> {

    if(action.type === 'INCREMENT') {
        return {count: state.count + 1}
    }

    return state

}

export default conuterReducer