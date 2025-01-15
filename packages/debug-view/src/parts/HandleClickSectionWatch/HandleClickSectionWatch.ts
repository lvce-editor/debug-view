import { DebugState } from '../DebugState/DebugState.ts'

export const handleClickSectionWatch = (state: DebugState): DebugState => {
  const { watchExpanded } = state
  return {
    ...state,
    watchExpanded: !watchExpanded,
    focusedIndex: 0, // TODO don't hardcode number
  }
}
