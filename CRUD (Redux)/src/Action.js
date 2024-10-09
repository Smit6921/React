export const AddData = (item) => {  
    return {  
      type: "ADDDATA",  
      payload: item,  
    };  
  };  
  
  export const DeleteData = (index) => {  
    return {  
      type: "DELETEDATA",  
      payload: index,  
    };  
  };  
  
  export const EditData = ({ item, index }) => {  
    return {  
      type: "EDITDATA",  
      payload: { item, index },  
    };  
  };