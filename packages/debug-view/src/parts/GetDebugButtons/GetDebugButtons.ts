import { DebugButton } from '../DebugButton/DebugButton.ts'
import * as DebugState from '../DebugState/DebugState.js'
import * as ViewletRunAndDebugStrings from '../ViewletRunAndDebug/ViewletRunAndDebugStrings.js'

export const getDebugButtons = (debugState: DebugState): readonly DebugButton[] => {
  const debugButtons: DebugButton[] = []
  if (debugState === DebugState.Paused) {
    debugButtons.push({
      title: ViewletRunAndDebugStrings.resume(),
      icon: 'DebugContinue',
      fn: 'resume',
    })
  } else {
    debugButtons.push({
      title: ViewletRunAndDebugStrings.pause(),
      icon: 'DebugPause',
      fn: 'pause',
    })
  }
  debugButtons.push(
    {
      title: ViewletRunAndDebugStrings.stepOver(),
      icon: 'DebugStepOver',
      fn: 'stepOver',
    },
    {
      title: ViewletRunAndDebugStrings.stepInto(),
      icon: 'DebugStepInto',
      fn: 'stepInto',
    },
    {
      title: ViewletRunAndDebugStrings.stepOut(),
      icon: 'DebugStepOut',
      fn: 'stepOut',
    },
    {
      title: ViewletRunAndDebugStrings.restart(),
      icon: 'DebugRestart',
      fn: 'restart',
    },
    {
      title: ViewletRunAndDebugStrings.stop(),
      icon: 'DebugStop',
      fn: 'stop',
    },
  )
  return debugButtons
}
