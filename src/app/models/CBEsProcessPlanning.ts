import CBEsPlanning from "./CBEsPlanning";
import CBEsProcess from "./CBEsProcess";

export default class CBEsProcessPlanning {
    id = 0;
    createDate = new Date()
    updateDate = new Date()
    isDeleted = false
    cbesProcessId = 0
    cbesPlanningId = 0
    cbesPlanning = new CBEsPlanning
    cbesProcess = new CBEsProcess
}
