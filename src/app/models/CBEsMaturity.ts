import CbesMaturityLog from "./CBEsMaturityLog"
import CBEsProcess from "./CBEsProcess"
import MaturityWithSupervisor from "./MaturityWithSupervisor"

export default class CBEsMaturity{
  id = 0
  detail = ""
  lv = 0
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false
  cbesProcessId = 0
  cbesMaturityLogs : CbesMaturityLog[] = []
  cbesProcess = new CBEsProcess
  maturityWithSupervisors : MaturityWithSupervisor[] = []
}
