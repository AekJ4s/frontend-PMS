import CBEsActivity from "./CBEsActivity"
import CBEsActivityLog from "./CBEsActivityLog"
import CBEsPlanning from "./CBEsPlanning"
import CBEsPlanningLog from "./CBEsPlanningLog"
import CBEsProcessLog from "./CBEsProcessLog"

export default class CbesIndicatorLog{
  id = 0
  isChecked1 = false
  isChecked2 = false
  isChecked3 = false
  isChecked4 = false
  isChecked5 = false
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false
  cbesActivityLogId = 0
  cbesProcessPlanningLogId = 0
  cbesPlanningLogId = 0
  cbesActivity = new CBEsActivityLog
  cbesPlanning = new CBEsPlanningLog
  cbesProcess = new CBEsProcessLog

}
