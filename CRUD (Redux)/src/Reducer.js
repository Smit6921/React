const initialValue = {  
    item: [],  
  };  
  
  export const reducer = (state = initialValue, action) => {  
    switch (action.type) {  
      case "ADDDATA":  
        return { ...state, item: [...state.item, action.payload] };  
  
      case "DELETEDATA":  
        const newItem = state.item.filter((_, i) => i !== action.payload);  
        return { ...state, item: newItem };  
  
      case "EDITDATA":  
        const newItems = state.item.map((ele, index) =>  
          index === action.payload.index ? action.payload.item : ele  
        );  
        return { ...state, item: newItems };  
  
      default:  
        return state;  
    }  
  };