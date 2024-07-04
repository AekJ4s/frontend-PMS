import CBEsActivityLog from "./CBEsActivityLog";
import CbesPointOfQuarterLog from "./CbesPointOfQuarterLog";

export default class CBEsQuarterlyScoreLog {
    id = 0;
    year: number | null = null;
    createDate: Date | null = null;
    updateDate: Date | null = null;
    isDeleted: boolean | null = null;
    cbesActivityLogId = 0;
    cbesActivityLog = new CBEsActivityLog();
    cbesPointOfQuarterLogs: CbesPointOfQuarterLog[] = [];
}
