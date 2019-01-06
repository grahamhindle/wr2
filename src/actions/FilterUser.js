
export const  SHOW_USER = 'SHOW_USER'
export const SHOW_ALL = 'SHOW_ALL'
export const CLEAR_USER_FILTERS = 'CLEAR_USER_FILTERS'



export const getLoggedOnUser = (user)=> ({
  type: SHOW_USER,
  user
})


export const clearUserFilters = () => ({
  type: CLEAR_USER_FILTERS ,
  defaultFilter: userFilterDefaultState

})

export const userFilterDefaultState =  {
  user: undefined
}