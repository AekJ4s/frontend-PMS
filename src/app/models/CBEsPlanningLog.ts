import CBEs from "./CBEs";
import CBEsActivityLog from "./CBEsActivityLog";
import CbesIndicatorLog from "./CBEsIndicatorLog";
import CBEsPlanningLogHeader from "./CBEsPlanningLogHeader";
import CBEsReportFormLog from "./CBEsReportFormLog";
import CBEsUser from "./CBEsUser";

export default class CBEsPlanningLog {
    id = 0;
    name = "";
    year = 0;
    createDate = new Date();
    updateDate = new Date();
    isDeleted = false;
    cbesId = 0;
    cbesPlanningLogHeaderId = 0;
    updateBy = 0;
    cbes = new CBEs();
    cbesActivityLogs: CBEsActivityLog[] = [];
    cbesIndicatorLogs: CbesIndicatorLog[] = [];
    cbesPlanningLogHeader = new CBEsPlanningLogHeader();
    cbesPlanningLogHeaders: CBEsPlanningLogHeader[] = [];
    cbesProcessPlanningLogs: CBEsPlanningLog[] = [];
    cbesReportFormLogs: CBEsReportFormLog[] = [];
    updateByNavigation = new CBEsUser();
}
