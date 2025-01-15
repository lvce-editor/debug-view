import * as HandleClickPauseOnExceptions from '../HandleClickPauseOnExceptions/HandleClickPauseOnExceptions.ts'
import * as HandleClickPauseOnUncaughtExceptions from '../HandleClickPauseOnUncaughtExceptions/HandleClickPauseOnCaughtExceptions.ts'
import * as InputName from '../InputName/InputName.ts'

export const handleClickCheckBox = (state: any, name: string): Promise<any> => {
  switch (name) {
    case InputName.PauseOnExceptions:
      return HandleClickPauseOnExceptions.handleClickPauseOnExceptions(state)
    case InputName.PauseOnUncaughtExceptions:
      return HandleClickPauseOnUncaughtExceptions.handleClickPauseOnUncaughtExceptions(state)
    default:
      throw new Error('unknown input name')
  }
}
