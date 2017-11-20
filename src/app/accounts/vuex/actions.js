export const doSomething = ({ commit }, data) => {
  commit('ADD_ACCOUNT', { account: data });
};
