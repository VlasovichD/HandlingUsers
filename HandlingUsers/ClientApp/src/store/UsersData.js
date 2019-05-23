const requestUsersDataType = 'REQUEST_USERS_DATA';
const receiveUsersDataType = 'RECEIVE_USERS_DATA';
const initialState = { users: [], isLoading: false };

export const actionCreators = {
    requestUsersData: startIdIndex => async (dispatch, getState) => {
        if (startIdIndex === getState().usersData.startIdIndex) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
            return;
        }

        dispatch({ type: requestUsersDataType, startIdIndex });

        //const url = `api/Users/usersData?startIdIndex=${startIdIndex}`;
        const url = `api/Users/0/10`;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: receiveUsersDataType, startIdIndex, users });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestUsersDataType) {
        return {
            ...state,
            startIdIndex: action.startIdIndex,
            isLoading: true
        };
    }

    if (action.type === receiveUsersDataType) {
        return {
            ...state,
            startIdIndex: action.startIdIndex,
            users: action.users,
            isLoading: false
        };
    }

    return state;
};
