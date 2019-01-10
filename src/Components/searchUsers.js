

  

export function getUserByAuthor(users, user) {
  return (users.find( x => x.id === user))
}    

export function getLoggedInUser(users,{user}) {
  
  return users.find( x => x.id !== user) 
}

export function getUserDisplayValues(uidstate,{panel}) {
  
  return uidstate.filter( x => x.id === panel) 
}


export function getAnsweredQuestions(answers,id) {
  const x = Object.keys(answers)
  const y = x.filter(key => key === id) 
  if ( y.length >0 )
  return true
}

export function getUnansweredQuestions(answers,id) {
  const x = Object.keys(answers)
  const y = x.filter(key => key === id)
  console.log(y)
  if ( y && y.length){
    return false
  } 
  else {
    return true
  }
}



