import * as Debug from '../Debug/Debug.ts'
import { DebugState } from '../DebugState/DebugState.ts'

export const resume = async (state: DebugState): Promise<DebugState> => {
  const { debugId } = state
  await Debug.resume(debugId)
  return state
}
