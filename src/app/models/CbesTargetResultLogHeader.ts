import CBEs from "./CBEs";
import CBEsReportFormLog from "./CBEsReportFormLog";
import CBEsTargetResultLogType from "./CBEsTargetResultLogType";
import CBEsProcessResultLog from "./CbesProcessResultLog";
import CBEsProcessTargetLog from "./CbesProcessTargetLog ";

export default class CBEsTargetResultLogHeader {
    id = 0;
    round = 0;
    remark = ""
    createDate = new Date
    updateDate = new Date
    isDeleted = false
    cbesTargetResultLogTypeId = 0;
    cbesProcessTargetLogId = 0;
    cbesProcessResultLogId = 0;
    cbesId = 0;
    cbes = new CBEs
    cbesProcessResultLog = new CBEsProcessResultLog
    cbesProcessResultLogs: CBEsProcessResultLog[] = []
    cbesProcessTargetLog = new CBEsProcessTargetLog
    cbesProcessTargetLogs: CBEsProcessTargetLog[] = [];
    cbesReportFormLogs: CBEsReportFormLog[] = [];
    cbesTargetResultLogType = new  CBEsTargetResultLogType
}
