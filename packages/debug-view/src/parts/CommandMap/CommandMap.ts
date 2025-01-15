import * as HandleClickPauseOnUncaughtExceptions from '../HandleClickPauseOnUncaughtExceptions/HandleClickPauseOnCaughtExceptions.ts'
import * as HandleClickSectionWatch from '../HandleClickSectionWatch/HandleClickSectionWatch.ts'

export const commandMap = {
  'Debug.handleClickPauseOnUncaughtExceptions': HandleClickPauseOnUncaughtExceptions.handleClickPauseOnUncaughtExceptions,
  'Debug.handleClickSectionWatch': HandleClickSectionWatch.handleClickSectionWatch,
}
