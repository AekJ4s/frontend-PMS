import CBEsPlanningLog from "./CBEsPlanningLog";
import CBEsPlanningLogHeader from "./CBEsPlanningLogHeader";
import CBEsUser from "./CBEsUser";

export default class CBEsReportFormLog {
    id = 0;
    submitDate = new Date()
    remark = "";
    isAccept = false
    createDate = new Date
    updateDate = new Date
    isDeleted = false
    updateBy = 0;
    userVerify = 0;
    cbesPlanningLogId = 0;
    cbesPlanningLogHeaderId = 0;
    cbesPlanningLog = new CBEsPlanningLog
    cbesPlanningLogHeader = new CBEsPlanningLogHeader
    updateByNavigation = new CBEsUser
    userVerifyNavigation = new CBEsUser
}
