import CBEsPlanningLogHeader from "./CBEsPlanningLogHeader";

export default class CBEsPlanningLogType {
    id = 0;
    type = "";
    createDate = new Date();
    updateDate = new Date();
    isDeleted = false;
    cbesPlanningLogHeaders: CBEsPlanningLogHeader[] = [];
}
