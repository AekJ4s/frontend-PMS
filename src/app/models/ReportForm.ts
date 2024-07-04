import CBEsPlanning from "./CBEsPlanning";
import CBEsUser from "./CBEsUser";

export default class CBEsReportForm {
    id = 0;
    submitDate = new Date
    remark = ""
    isAccept = false
    createDate = new Date
    updateDate = new Date
    isDeleted = false
    createBy = 0
    userVerify = 0
    cbesPlanning = new CBEsPlanning
    createByNavigation = new CBEsUser
    userVerifyNavigation = new CBEsUser
}
