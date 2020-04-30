import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

@Module
export default class Alert extends VuexModule {
  public showAlert: boolean = false
  public alertBorder: string = 'left'
  public alertType: string = 'info'
  public alertMessage: string = 'message'

  @Mutation
  public setShowAlert(showAlert: boolean) {
    this.showAlert = showAlert
  }

  @Mutation
  public setAlertBorder(alertBorder: string) {
    this.alertBorder = alertBorder
  }

  @Mutation
  public setAlertType(alertType: string) {
    this.alertType = alertType
  }

  @Mutation
  public setAlertMessage(alertMessage: string) {
    this.alertMessage = alertMessage
  }

  @Action
  public updateShowAlert(alertInfo: {
    showAlert: boolean,
    alertMessage: string,
    alertType: string
  }) {
    this.context.commit('setShowAlert', alertInfo.showAlert)
    this.context.commit('setAlertMessage', alertInfo.alertMessage)
    this.context.commit('setAlertType', alertInfo.alertType)
    setTimeout(() => {
      this.context.commit('setShowAlert', false)
    }, 4000)
  }
}
