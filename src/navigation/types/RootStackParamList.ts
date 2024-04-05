export type RootStackParamList = {
  TodoList: undefined;
  TodoDetail: { todoId: string };
};

/**
 * @see https://reactnavigation.org/docs/typescript/#organizing-types
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}