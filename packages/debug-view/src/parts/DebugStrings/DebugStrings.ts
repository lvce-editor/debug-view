import * as I18NString from '../I18NString/I18NString.ts'

/**
 * @enum {string}
 */
const UiStrings = {
  Block: 'Block',
  BreakPoints: 'BreakPoints',
  CallStack: 'Call Stack',
  Catch: '`Catch` block',
  Closure: 'Closure',
  DebuggerPaused: 'Debugger paused',
  DebuggerPausedOnException: 'Paused on exception',
  Eval: 'Eval',
  Expression: 'Expression',
  Global: 'Global',
  Local: 'Local',
  Module: 'Module',
  NamedClosure: 'Closure ({PH1})',
  NotPaused: 'Not Paused',
  Pause: 'Pause',
  Restart: 'Restart',
  Resume: 'Resume',
  Scope: 'Scope',
  Script: 'Script',
  StepInto: 'Step Into',
  StepOut: 'Step Out',
  StepOver: 'Step Over',
  Stop: 'Stop',
  Watch: 'Watch',
  With: '`With` block',
  PauseOnExceptions: 'Pause on Exceptions',
  PauseOnUncaughtExceptions: 'Pause on uncaught Exceptions',
}

export const local = (): string => {
  return I18NString.i18nString(UiStrings.Local)
}

export const namedClosure = (name: string): string => {
  return I18NString.i18nString(UiStrings.NamedClosure, {
    PH1: name,
  })
}

export const closure = (): string => {
  return I18NString.i18nString(UiStrings.Closure)
}

export const global = (): string => {
  return I18NString.i18nString(UiStrings.Global)
}

export const block = (): string => {
  return I18NString.i18nString(UiStrings.Block)
}

export const expression = (): string => {
  return I18NString.i18nString(UiStrings.Expression)
}

export const module = (): string => {
  return I18NString.i18nString(UiStrings.Module)
}

export const evalScope = (): string => {
  return I18NString.i18nString(UiStrings.Eval)
}

export const script = (): string => {
  return I18NString.i18nString(UiStrings.Script)
}

export const withScope = (): string => {
  return I18NString.i18nString(UiStrings.With)
}

export const catchScope = (): string => {
  return I18NString.i18nString(UiStrings.Catch)
}

export const debuggerPaused = (): string => {
  return I18NString.i18nString(UiStrings.DebuggerPaused)
}

export const debuggerPausedOnException = (): string => {
  return I18NString.i18nString(UiStrings.DebuggerPausedOnException)
}

export const stepInto = (): string => {
  return I18NString.i18nString(UiStrings.StepInto)
}

export const stepOver = (): string => {
  return I18NString.i18nString(UiStrings.StepOver)
}

export const stepOut = (): string => {
  return I18NString.i18nString(UiStrings.StepOut)
}

export const pause = (): string => {
  return I18NString.i18nString(UiStrings.Pause)
}

export const watch = (): string => {
  return I18NString.i18nString(UiStrings.Watch)
}

export const breakPoints = (): string => {
  return I18NString.i18nString(UiStrings.BreakPoints)
}

export const scope = (): string => {
  return I18NString.i18nString(UiStrings.Scope)
}

export const callStack = (): string => {
  return I18NString.i18nString(UiStrings.CallStack)
}

export const notPaused = (): string => {
  return I18NString.i18nString(UiStrings.NotPaused)
}

export const resume = (): string => {
  return I18NString.i18nString(UiStrings.Resume)
}

export const restart = (): string => {
  return I18NString.i18nString(UiStrings.Restart)
}

export const stop = (): string => {
  return I18NString.i18nString(UiStrings.Stop)
}

export const pauseOnExceptions = (): string => {
  return I18NString.i18nString(UiStrings.PauseOnExceptions)
}

export const pauseOnUncaughtExceptions = (): string => {
  return I18NString.i18nString(UiStrings.PauseOnUncaughtExceptions)
}
