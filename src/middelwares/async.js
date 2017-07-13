/**
 * Created by reube on 13/07/2017.
 */

export default function({ dispatch }) {
    return next => action => {
        if(!action.payload || !action.payload.then) {
            return next(action);
        }

        // Make sure the action's promise resolves
        action.payload.then(response => {
            // Create a new action with the old type BUT replace the promise with the response data
            const newAction = { ...action, payload: response.data };
            // Make sure the new action is passed through ALL the reducers again
            dispatch(newAction);
        });
    }
}

// next => Goes to the next action
// dispatch => dispatches the new action through ALL the middleware as a new action