import CBEsLog from "./CBEsLog"
import CBEsPlanning from "./CBEsPlanning"
import CBEsPlanningLog from "./CBEsPlanningLog"
import CBEsProcess from "./CBEsProcess"
import CBEsTargetResultLogHeader from "./CbesTargetResultLogHeader"
import CBEsUser from "./CBEsUser"
import CBEsWithSubSupervisor from "./CBEsWithSubSupervisor"
import CBEswithSupervisor from "./CBEsWithSupervisor"

export default class CBEs{
  id = 0
  thaiName = "ชื่อภาษาไทย"
  engName = "ชื่อภาษาอังกฤษ"
  shortName = "ตัวย่อโครงการ"
  detail = "รายละเอียด"
  isActive = true;
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false;
  isLastDelete = false;
  createBy = 0
  cbesPlanningLogs : CBEsPlanningLog[] = []
  cbesPlanning : CBEsPlanning[] = []
  cbesProcesses : CBEsProcess[] = []
  cbesTargetResultLogHeaders : CBEsTargetResultLogHeader[] = []
  cbesWithSubSupervisors : CBEsWithSubSupervisor[] = []
  cbeswithSupervisors : CBEswithSupervisor[] = []
  createByNavigation = new CBEsUser

}
