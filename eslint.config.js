import config from '@lvce-editor/eslint-config'

export default [
  ...config,
  {
    ignores: ['packages/debug-view/src/debugWorkerMain.ts'],
  },
]
