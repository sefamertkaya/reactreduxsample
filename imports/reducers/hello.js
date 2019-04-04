const hello = (state= {isVisible:true}, action) =>
{
    switch (action.type) {
        case 'toggle':
            return({
                isVisible :!state.isVisible,
                type: action.type,
            })

        default:
            return {state:null}
    }
}
export default hello;