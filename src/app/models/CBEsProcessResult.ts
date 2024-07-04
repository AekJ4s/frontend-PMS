import CBEsProcessLog from "./CBEsProcessLog";
import CBEsUser from "./CBEsUser";
import CBEsProcessTargetLog from "./CbesProcessTargetLog ";
import CBEsTargetResultLogHeader from "./CbesTargetResultLogHeader";

export default class CBEsProcessResult {
  id = 0;
  resultPoint = 0;
  remark = "";
  updateBy = 0;
  cbesProcessLogId = 0;
  cbesProcessTargetLogId = 0;
  cbesTargetResultLogHeaderId = 0;
  cbesProcessLog = new CBEsProcessLog();
  cbesProcessTargetLog = new CBEsProcessTargetLog();
  cbesTargetResultLogHeader = new CBEsTargetResultLogHeader();
  cbesTargetResultLogHeaders: CBEsTargetResultLogHeader[] = [];
  updateByNavigation = new CBEsUser();
}
