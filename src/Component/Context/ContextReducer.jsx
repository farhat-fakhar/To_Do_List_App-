const ContextReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_VALUE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ITEM_LIST":
      const { itemList } = state;
      const newItem = action.payload;
      return {
        ...state,
        itemList: [...itemList, newItem],
      };
    case "RESET_INPUT":
      return {
        ...state,
        title: "",
        description: "",
      };
    case "DELTE_ITEM":
      const remainingItems = state.itemList.filter(
        (_, index) => index !== action.payload
      );

      return {
        ...state,
        itemList: remainingItems,
        completed:remainingItems
      };
      case "COMPLETED_TASK":
        const remove=state.itemList.filter((_, index)=>index !== action.payload)
        const task=state.itemList.find((_, index)=>index===action.payload)
        return{
          ...state,
          itemList:remove,
          completed: [...state.completed, task]
        }
    default:
      return state;
  }
};

export default ContextReducer;
