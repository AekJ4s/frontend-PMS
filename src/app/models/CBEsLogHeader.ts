import CBEs from "./CBEs";
import CBEsLog from "./CBEsLog";
import CBEsLogType from "./CBEsLogType";
import CbesMaturityLog from "./CBEsMaturityLog";
import CBEsUsers from "./CBEsUser";

export default class CBEsLogHeader {
    id = 0;
    round = 0;
    remark = "";
    createDate = new Date();
    updateDate = new Date();
    isDeleted = false;
    cbesLogTypeId = 0;
    cbesId = 0;
    updateBy = 0
    updateByNavigation = new CBEsUsers
    cbes = new CBEs
    cbesLogType = new CBEsLogType
    cbesMaturityLogs: CbesMaturityLog[] = [];
}
