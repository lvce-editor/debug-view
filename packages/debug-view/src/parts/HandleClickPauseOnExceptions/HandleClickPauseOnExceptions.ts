import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as SetPauseOnExceptions from '../SetPauseOnExceptions/SetPauseOnExceptions.ts'

export const handleClickPauseOnExceptions = (state: any): Promise<any> => {
  const { exceptionBreakPoints } = state
  switch (exceptionBreakPoints) {
    case ExceptionBreakPoints.None:
      return SetPauseOnExceptions.setPauseOnExceptions(state, ExceptionBreakPoints.All)
    case ExceptionBreakPoints.Uncaught:
      return SetPauseOnExceptions.setPauseOnExceptions(state, ExceptionBreakPoints.All)
    case ExceptionBreakPoints.All:
      return SetPauseOnExceptions.setPauseOnExceptions(state, ExceptionBreakPoints.None)
    default:
      return state
  }
}
