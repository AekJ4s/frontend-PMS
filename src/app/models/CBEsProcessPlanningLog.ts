import CbesIndicatorLog from "./CBEsIndicatorLog";
import CBEsPlanning from "./CBEsPlanning";
import CBEsPlanningLog from "./CBEsPlanningLog";

export default class CBEsProcessPlanningLog {
  id = 0;
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false;
  cbesPlannnigId = 0;
  cbesProcessLogId = 0;
  cbesIndicatorLogs: CbesIndicatorLog[] = [];
  cbesPlannnig = new CBEsPlanning();
  cbesProcessLog = new CBEsPlanningLog();
}
