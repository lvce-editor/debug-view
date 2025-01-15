import { DebugState } from '../DebugState/DebugState.ts'
import * as Debug from '../Debug/Debug.ts'

export const pause = async (state: DebugState): Promise<DebugState> => {
  const { debugId } = state
  await Debug.pause(debugId)
  return state
}
