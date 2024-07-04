import CBEsTargetResultLogHeader from "./CbesTargetResultLogHeader";

export default class CBEsTargetResultLogType {
    id = 0;
    name = ""
    createDate = new Date()
    updateDate = new Date()
    isDeleted = false
    cbesTargetResultLogHeaders: CBEsTargetResultLogHeader[] = [];
}
