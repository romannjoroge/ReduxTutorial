export const INITIAL_STATE = {
    quote: "",
    loading: true,
    error: false
}

export const ACTIONS = {
    LOADING: "Loading",
    SUCCESS: "Success",
    ERROR: "Error"
}

export function quoteResolver(state, action) {
    switch (action.type) {
        case ACTIONS.LOADING:
            return {
                error: false,
                loading: true,
                quote: ""
            }
        case ACTIONS.SUCCESS:
            return {
                error: false,
                loading: false,
                quote: action.payload
            }
        case ACTIONS.ERROR:
            return {
                error: true,
                loading: false,
                quote: ""
            }
        default:
            return state
    }
}

