//ACTION opisuje co chcemy zrobić, to tylko nazwa-> idziesz do sklepu bo jesteś głodny ale nie kupujesz jedzenia
//funcja która zwraca obiekt

export const increment = () => {
    return {
      type: 'INCREMENT'  //nazwa akcji, może byc name ale używa się type
    }
  }
  
export const decrement = () => {
    return {
      type: 'DECREMENT'  
    }
  }

  export const addPhoto = () => {
      return {
          type: 'ADDPHOTO',
      }
  }