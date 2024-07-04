import CBEsActivity from "./CBEsActivity"
import CBEsPlanning from "./CBEsPlanning"
import CBEsProcess from "./CBEsProcess"

export default class CbesIndicator{
  id = 0
  isChecked1 = false
  isChecked2 = false
  isChecked3 = false
  isChecked4 = false
  isChecked5 = false
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false
  cbesActivityId = 0
  cbesProcessId = 0
  cbesPlanningId = 0
  cbesActivity = new CBEsActivity
  cbesPlanning = new CBEsPlanning
  cbesProcess = new CBEsProcess

}
