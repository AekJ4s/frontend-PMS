import CBEsLog from "./CBEsLog";
import CbesMaturityLog from "./CBEsMaturityLog";
import CBEsProcess from "./CBEsProcess";
import CBEsProcessResultLog from "./CbesProcessResultLog";
import CBEsProcessTargetLog from "./CbesProcessTargetLog ";

export default class CBEsProcessLog {
    id = 0;
    name = "";
    weight = 0;
    createDate = new Date()
    updateDate = new Date()
    isDeleted = false
    processHeaderId = 0;
    cbesLogId = 0;
    cbesProcessId = 0;
    cbesLog: CBEsLog | null = null;
    cbesProcess: CBEsProcess | null = null;
    cbesMaturityLogs: CbesMaturityLog[] = [];
    cbesProcessResultLogs: CBEsProcessResultLog[] = [];
    cbesProcessTargetLogs: CBEsProcessTargetLog[] = [];
    inverseProcessHeader: CBEsProcessLog[] = [];
    processHeader = new CBEsProcessLog
}
