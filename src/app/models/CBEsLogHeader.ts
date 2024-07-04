import CBEsLog from "./CBEsLog";
import CBEsLogType from "./CBEsLogType";
import CbesMaturityLog from "./CBEsMaturityLog";

export default class CBEsLogHeader {
    id = 0;
    round = 0;
    remark = "";
    createDate = new Date();
    updateDate = new Date();
    isDeleted = false;
    cbesLogTypeId = 0;
    cbesLogId = 0;
    cbesLog = new CBEsLog
    cbesLogType = new CBEsLogType
    cbesLogs: CBEsLog[] = [];
    cbesMaturityLogs: CbesMaturityLog[] = [];
}
