import CBEs from "./CBEs";
import CBEsLogHeader from "./CBEsLogHeader";
import CBEsProcessLog from "./CBEsProcessLog";
import CBEsUser from "./CBEsUser";

export default class CBEsLog {
    id = 0;
    thaiName = "";
    engName = "";
    shortName = "";
    detail = "";
    year = 0;
    createDate = new Date();
    updateDate = new Date();
    isDeleted = false;
    isLastDelete = false;
    updateBy = 0;
    cbesLogHeaderId = 0;
    cbesId = 0
    cbes = new CBEs
    cbesLogHeaders: CBEsLogHeader[] = [];
    cbesProcessLogs: CBEsProcessLog[] = [];
    updateByNavigation = new CBEsUser
}
