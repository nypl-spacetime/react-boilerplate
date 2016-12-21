import { createSelector } from 'reselect'

const selectGlobal = () => (state) => state.get('global')

const selectLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('loading')
)

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('error')
)

const selectData = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('data').toJS()
)

const selectConfig = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('config').toJS()
)

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return (state) => {
    const routingState = state.get('route') // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

export {
  selectLoading,
  selectError,
  selectData,
  selectConfig,
  selectLocationState
}
