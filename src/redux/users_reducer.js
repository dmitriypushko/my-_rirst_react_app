import {usersAPI} from "../api/api";

const FOLLOW = ' FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';
const SETCURRENTPAGE = 'SET_CURRENT_PAGE';
const SETTOTALUSERSCOUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLEISFETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOOLOWING_PROGRESS = 'TOOGLE_IS_FOOLOWING_PROGRESS';

let initialState = {
    users: [ ],
    pageSize : 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                       return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SETUSERS: {
            return {...state, users: action.users}
        }
        case SETCURRENTPAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SETTOTALUSERSCOUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOOGLEISFETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOOGLE_IS_FOOLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SETUSERS, users});
export const setCurrentPage = (currentPage) => ({type: SETCURRENTPAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SETTOTALUSERSCOUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOOGLEISFETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOOGLE_IS_FOOLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));

        });
    };
};

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.followButtonAPI(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    };
};

export const unFollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollowButtonAPI(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unFollowSuccess(userId));
            }
        });
        dispatch(toggleIsFollowingProgress(false, userId));
    };
};

export default usersReducer;
