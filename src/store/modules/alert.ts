import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

@Module({ dynamic: true, store, name: 'alert' })
class Alert extends VuexModule {
  public showAlert: boolean = false
}

export const AlertModule = getModule(Alert)
