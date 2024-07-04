import CBEsActivityLog from "./CBEsActivityLog";
import CBEsIndicatorLog from "./CBEsIndicatorLog";
import CBEsPlanningLog from "./CBEsPlanningLog";
import CBEsQuarterlyScoreLog from "./CBEsQuarterlyScoreLog";

export default class CBEsLogType {
    id = 0;
    name = "";
    createDate = new Date();
    updateDate = new Date();
    isDeleted = false;
    headerId = 0;
    cbesPlanningLogId = 0;
    cbesIndicatorLogs: CBEsIndicatorLog[] = [];
    cbesPlanningLog = new CBEsPlanningLog();
    cbesQuarterlyScoreLogs: CBEsQuarterlyScoreLog[] = [];
    header = new CBEsActivityLog();
    inverseHeader: CBEsActivityLog[] = [];
}
