import { DebugState } from '../DebugState/DebugState.ts'
import * as Debug from '../Debug/Debug.ts'

export const stepInto = async (state: DebugState): Promise<DebugState> => {
  const { debugId } = state
  await Debug.stepInto(debugId)
  return state
}
