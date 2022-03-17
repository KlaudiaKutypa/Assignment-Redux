const initialstate = [
    {id : 1, image: "./person1.jpg"},
    {id : 2, image: "./person2.jpg"},
    {id : 3, image: "./person3.jpg"},
    {id : 4, image: "./person4.jpg"},
    {id : 5, image: "./person5.jpg"}
];

const pictureReducer = (state=initialstate, action) => {
    switch(action.type){
      case 'PHOTO':
        return state;
      default:
        return state;
    }
  }
  export default pictureReducer;