import type { DebugState } from '../DebugState/DebugState.ts'
import * as Debug from '../Debug/Debug.ts'

export const stepOut = async (state: DebugState): Promise<DebugState> => {
  const { debugId } = state
  await Debug.stepOut(debugId)
  return state
}
