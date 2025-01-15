import type { DebugButton } from '../DebugButton/DebugButton.ts'
import type { DebugState } from '../DebugState/DebugState.ts'
import * as DebugStateValue from '../DebugStateValue/DebugStateValue.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'

export const getDebugButtons = (debugState: DebugState): readonly DebugButton[] => {
  const debugButtons: DebugButton[] = []
  if (debugState === DebugStateValue.Paused) {
    debugButtons.push({
      title: DebugStrings.resume(),
      icon: 'DebugContinue',
      fn: 'resume',
    })
  } else {
    debugButtons.push({
      title: DebugStrings.pause(),
      icon: 'DebugPause',
      fn: 'pause',
    })
  }
  debugButtons.push(
    {
      title: DebugStrings.stepOver(),
      icon: 'DebugStepOver',
      fn: 'stepOver',
    },
    {
      title: DebugStrings.stepInto(),
      icon: 'DebugStepInto',
      fn: 'stepInto',
    },
    {
      title: DebugStrings.stepOut(),
      icon: 'DebugStepOut',
      fn: 'stepOut',
    },
    {
      title: DebugStrings.restart(),
      icon: 'DebugRestart',
      fn: 'restart',
    },
    {
      title: DebugStrings.stop(),
      icon: 'DebugStop',
      fn: 'stop',
    },
  )
  return debugButtons
}
