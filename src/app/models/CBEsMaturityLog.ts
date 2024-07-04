import CBEsLogHeader from "./CBEsLogHeader";
import CBEsMaturity from "./CBEsMaturity";
import CBEsProcessLog from "./CBEsProcessLog";

export default class CbesMaturityLog {
    id = 0;
    name = "";
    round = 0;
    remark = "";
    createDate: Date | null = null;
    updateDate: Date | null = null;
    isDeleted: boolean | null = null;
    cbesProcessLogId = 0;
    cbesMaturityId = 0;
    cbesLogHeaderId = 0;
    cbesLogHeader: CBEsLogHeader | null = null;
    cbesMaturity: CBEsMaturity | null = null;
    cbesProcessLog: CBEsProcessLog | null = null;
}
