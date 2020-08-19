export default function({ dispatch }) {
    return next => action => {
        // If action does not have a payload or, the payload does not have a .then property, it gets sent on
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        
        // Ensure the action's promise resolves
        action.payload 
            .then(function(response) {
                // Create a new action with the old type, but replace the promise with the response data
                const newAction = { ...action, payload: response };
                dispatch(newAction);
        });
    }
}