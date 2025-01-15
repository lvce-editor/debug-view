import * as HandleClickPauseOnUncaughtExceptions from '../HandleClickPauseOnUncaughtExceptions/HandleClickPauseOnCaughtExceptions.ts'
import * as HandleClickSectionWatch from '../HandleClickSectionWatch/HandleClickSectionWatch.ts'
import * as Pause from '../Pause/Pause.ts'
import * as Resume from '../Resume/Resume.ts'
import * as StepInto from '../StepInto/StepInto.ts'
import * as StepOut from '../StepOut/StepOut.ts'
import * as StepOver from '../StepOver/StepOver.ts'
import * as TogglePause from '../TogglePause/TogglePause.ts'

export const commandMap = {
  'Debug.handleClickPauseOnUncaughtExceptions': HandleClickPauseOnUncaughtExceptions.handleClickPauseOnUncaughtExceptions,
  'Debug.handleClickSectionWatch': HandleClickSectionWatch.handleClickSectionWatch,
  'Debug.stepOut': StepOut.stepOut,
  'Debug.stepInto': StepInto.stepInto,
  'Debug.stepOver': StepOver.stepOver,
  'Debug.togglePause': TogglePause.togglePause,
  'Debug.resume': Resume.resume,
  'Debug.pause': Pause.pause,
}
