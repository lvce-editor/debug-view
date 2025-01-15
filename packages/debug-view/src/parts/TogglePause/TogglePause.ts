import { DebugState } from '../DebugState/DebugState.ts'
import * as DebugStateValue from '../DebugStateValue/DebugStateValue.ts'
import * as Pause from '../Pause/Pause.ts'
import * as Resume from '../Resume/Resume.ts'

export const togglePause = async (state: DebugState): Promise<DebugState> => {
  const { debugState } = state
  if (debugState === DebugStateValue.Default) {
    return Pause.pause(state)
  }
  return Resume.resume(state)
}
