const initialState = {
  projects: [
    {id: '1', title: 'I can change the world', content: 'lorem ipsum'},
    {id: '2', title: 'Belive in yourself', content: 'lorem ipsum'},
    {id: '3', title: 'You are beautiful', content: 'lorem ipsum'},
  ],
}

const projectReducer = (state = initialState, action) => {
  return state
}

export default projectReducer
