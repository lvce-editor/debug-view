import * as HandleClickPauseOnUncaughtExceptions from '../HandleClickPauseOnUncaughtExceptions/HandleClickPauseOnCaughtExceptions.ts'
import * as HandleClickSectionWatch from '../HandleClickSectionWatch/HandleClickSectionWatch.ts'
import * as StepInto from '../StepInto/StepInto.ts'
import * as StepOut from '../StepOut/StepOut.ts'

export const commandMap = {
  'Debug.handleClickPauseOnUncaughtExceptions': HandleClickPauseOnUncaughtExceptions.handleClickPauseOnUncaughtExceptions,
  'Debug.handleClickSectionWatch': HandleClickSectionWatch.handleClickSectionWatch,
  'Debug.stepOut': StepOut.stepOut,
  'Debug.stepInto': StepInto.stepInto,
}
