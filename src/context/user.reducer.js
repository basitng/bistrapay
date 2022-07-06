export const userReducer = (state, action) => {
  switch (action.type) {
    case "add_balance":
      return (state.balance += 1);
    case "reduce_balance":
      return (state.balance -= 1);
  }
};
