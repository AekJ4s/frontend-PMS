import CBEsPlanningLog from "./CBEsPlanningLog";
import CBEsQuarterlyScoreLog from "./CBEsQuarterlyScoreLog";

export default class CBEsActivityLog {
    id = 0;
    name = "";
    createDate: Date | null = null;
    updateDate: Date | null = null;
    isDeleted: boolean | null = null;
    headerId = 0;
    cbesPlanningLogId = 0;
    cbesPlanningLog: CBEsPlanningLog | null = null;
    cbesIndicatorLogs: CBEsPlanningLog[] = [];
    cbesQuarterlyScoreLogs: CBEsQuarterlyScoreLog[] = [];
    header: CBEsActivityLog | null = null;
    inverseHeader: CBEsActivityLog[] = [];
}
