import { DebugState } from '../DebugState/DebugState.ts'
import * as Debug from '../Debug/Debug.ts'

export const stepOver = async (state: DebugState): Promise<DebugState> => {
  const { debugId } = state
  await Debug.stepOver(debugId)
  return state
}
