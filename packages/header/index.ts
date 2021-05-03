import { App } from 'vue'
import Index from './src/index.vue'

Index.install = (app: App): void => {
  app.component(Index.name, Index)
}
export default Index;
