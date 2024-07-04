import CBEsProcessLog from "./CBEsProcessLog";
import CBEsUser from "./CBEsUser";
import CBEsProcessResultLog from "./CbesProcessResultLog";
import CBEsTargetResultLogHeader from "./CbesTargetResultLogHeader";

export default class CBEsProcessTargetLog {
  id = 0;
  year = 0;
  targetPoint = 0;
  updateBy = 0;
  cbesProcessLogId = 0;
  cbesTargetResultLogHeaderId = 0;
  cbesProcessLog = new CBEsProcessLog();
  cbesTargetResultLogHeader = new CBEsTargetResultLogHeader();
  cbesProcessResultLogs: CBEsProcessResultLog[] = [];
  cbesTargetResultLogHeaders: CBEsTargetResultLogHeader[] = [];
  updateByNavigation = new CBEsUser();
}
