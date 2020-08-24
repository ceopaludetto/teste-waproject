export const types = {
  SUCCESS: "@USER/SUCCESS",
  FAILURE: "@USER/FAILURE",
  REMOVE: "@USER/REMOVE",
};

export const initialState = {
  success: false,
  failure: false,
  loading: true,
  message: "",
  data: [],
  hidden: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload.data,
      };
    case types.FAILURE:
      return {
        ...state,
        loading: false,
        failure: true,
        message: action.payload.data.message,
      };
    case types.REMOVE:
      const current = state.data;
      const user = state.data[action.payload.index];

      current.splice(action.payload.index, 1);

      return {
        ...state,
        data: current,
        hidden: [...state.hidden, user],
      };
    default:
      return state;
  }
}
