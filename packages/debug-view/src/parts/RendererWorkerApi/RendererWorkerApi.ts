export interface RendererWorkerApi {
  readonly 'Viewlet.closeWidget': (widgetId: string) => Promise<string>
}
