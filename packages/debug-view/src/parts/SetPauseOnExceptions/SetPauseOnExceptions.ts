import * as Debug from '../Debug/Debug.ts'

export const setPauseOnExceptions = async (state: any, value: any): Promise<any> => {
  const { debugId } = state
  await Debug.setPauseOnExceptions(debugId, value)
  return {
    ...state,
    exceptionBreakPoints: value,
  }
}
