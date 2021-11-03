import { useCallback } from "react"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
let initialState = {
    
    users:[{ id: 1, photoUrl: 'https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw=', alt: 'foto',  followed: true, fullName: 'Sergey Y.', status: 'boss', location:{city: 'Minsk', country: 'Belarus'} },
{ id: 2,  photoUrl: 'https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'foto',  followed: false, fullName: 'Pete Y.', status: 'boss', location:{city: 'Moskau', country: 'Russia'} }, ]
  
}
                
const usersReducer = (state = initialState, action) =>{
switch (action.type){
    case FOLLOW:
        return {
    ...state,
    users: state.users.map(  u =>{
        if(u.id === action.userId){
        return {...u, followed: true}
        }
        return u;
    } )
}
    case UNFOLLOW:
        return {
    ...state,  
    users: state.users.map( u =>{
        if(u.id === action.userId){
        return {...u, followed: false}
        }
        return u;
    } )
}
        case SET_USERS:
        return {
                  ...state, users: [...state.users, ...action.users]
        }
    default:
        return state;	

     }

}

export const followAC = (userId) => ({type: FOLLOW, userId})        
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })  
export const setUsersAC = (users) => ({type: SET_USERS, users })

export default usersReducer