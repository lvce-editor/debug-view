import type { DebugState } from '../DebugState/DebugState.ts'
import * as Debug from '../Debug/Debug.ts'

export const resume = async (state: DebugState): Promise<DebugState> => {
  const { debugId } = state
  await Debug.resume(debugId)
  return state
}
