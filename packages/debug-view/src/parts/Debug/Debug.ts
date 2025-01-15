import * as ExtensionHostDebug from '../ExtensionHostDebug/ExtensionHostDebug.ts'

export const create = (debugId: any): any => {
  return {
    debugId,
  }
}

export const start = (id: any): Promise<any> => {
  return ExtensionHostDebug.start(id)
}

export const listProcesses = (id: any): Promise<any> => {
  return ExtensionHostDebug.listProcesses(id)
}

export const resume = (id: any): Promise<any> => {
  return ExtensionHostDebug.resume(id)
}

export const pause = (id: any): Promise<any> => {
  return ExtensionHostDebug.pause(id)
}

export const stepOver = (id: any): Promise<any> => {
  return ExtensionHostDebug.stepOver(id)
}

export const stepInto = (id: any): Promise<any> => {
  return ExtensionHostDebug.stepInto(id)
}

export const stepOut = (id: any): Promise<any> => {
  return ExtensionHostDebug.stepOut(id)
}

export const step = (id: any): Promise<any> => {
  return ExtensionHostDebug.step(id)
}

export const setPauseOnExceptions = (id: any, value: any): Promise<any> => {
  return ExtensionHostDebug.setPauseOnExceptions(id, value)
}
export const getProperties = (id: any, objectId: any): Promise<any> => {
  return ExtensionHostDebug.getProperties(id, objectId)
}

export const evaluate = (id: any, expression: any, callFrameId: any): Promise<any> => {
  return ExtensionHostDebug.evaluate(id, expression, callFrameId)
}

export const scriptParsed = (script: any): any => {
  // TODO
  return script
}

export const paused = (params: any): void => {
  // TODO
  return params
}

export const resumed = (params: any): void => {
  // TODO
  return params
}
