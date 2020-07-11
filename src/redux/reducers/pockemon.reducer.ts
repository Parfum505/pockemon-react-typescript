interface DefaultStateI {}
const defaultState: DefaultStateI = {};

const pockemonReducer = (
  state: DefaultStateI = defaultState,
  action: any
): DefaultStateI => {
  return state;
};

export default pockemonReducer;
