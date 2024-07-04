import CBEs from "./CBEs";
import CBEsReportFormLog from "./CBEsReportFormLog";
import CBEsProcessResultLog from "./CbesProcessResultLog";
import CBEsProcessTargetLog from "./CbesProcessTargetLog ";
import CBEsTargetResultLogHeader from "./CbesTargetResultLogHeader";


export default class CBEsProcessResultLogHeader {
    id = 0;
    round = 0
    remark = ""
    createDate = new Date()
    updateDate = new Date()
    isDeleted = false
    cbesTargetResultLogTypeId = 0
    cbesProcessTargetLogId = 0
    cbesProcessResultLogId = 0
    cbesId = 0
    cbes = new CBEs
    cbesProcessResultLog = new CBEsProcessResultLog
    cbesProcessResultLogs: CBEsProcessResultLog[] = [];
    cbesProcessTargetLog: CBEsProcessTargetLog | null = null;
    cbesProcessTargetLogs: CBEsProcessTargetLog[] = [];
    cbesReportFormLogs: CBEsReportFormLog[] = [];
    cbesTargetResultLogType: CBEsTargetResultLogHeader | null = null;
}
