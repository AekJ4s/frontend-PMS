import CBEsPlanningLog from "./CBEsPlanningLog";
import CBEsPlanningLogType from "./CBEsPlanningLogType";

export default class CBEsPlanningLogHeader {
    id = 0;
    round = 0;
    remark = "";
    createDate = new Date();
    updateDate = new Date();
    isDeleted = false;
    cbesPlanningLogId = 0;
    cbesPlanningLogTypeId = 0;
    cbesPlanningLog = new CBEsPlanningLog
    cbesPlanningLogType = new CBEsPlanningLogType
    cbesPlanningLogs: CBEsPlanningLog[] = [];
}
