import CBEs from "./CBEs"
import CBEsLog from "./CBEsLog"
import CBEsPermission from "./CBEsPermission"
import CBEsPlanning from "./CBEsPlanning"
import CBEsPlanningLog from "./CBEsPlanningLog"
import CBEsPosition from "./CBEsPosition"
import CBEsReportFormLog from "./CBEsReportFormLog"
import CBEsRole from "./CBEsRole"
import CBEsUserWithRole from "./CBEsUserWithRole"
import CBEsWithSubSupervisor from "./CBEsWithSubSupervisor"
import CBEswithSupervisor from "./CBEsWithSupervisor"
import CBEsProcessResultLog from "./CbesProcessResultLog"
import CBEsProcessTargetLog from "./CbesProcessTargetLog "
import MaturityWithSupervisor from "./MaturityWithSupervisor"
import CBEsReportForm from "./ReportForm"

export default class CBEsUsers{
  id = 0
  username = ""
  password = ""
  fullname = ""
  createDate = new Date()
  updateDate = new Date()
  loginDate = new Date()
  loginFailedCount = 0
  isDeleted = false;
  isLog = false;
  createBy = 0;
  updateBy = 0;
  positionId = 0;
  userWithRoleId = 0;
  cbes: CBEs[] = [];
  cbesLogs: CBEsLog[] = [];
  cbesPermissionCreateByNavigations: CBEsPermission[] = [];
  cbesPermissionUpdateByNavigations: CBEsPermission[] = [];
  cbesPlanningLogs: CBEsPlanningLog[] = [];
  cbesPlannings: CBEsPlanning[] = [];
  cbesPositionCreateByNavigations: CBEsPosition[] = [];
  cbesPositionUpdateByNavigations: CBEsPosition[] = [];
  cbesProcessResultLogs: CBEsProcessResultLog[] = [];
  cbesProcessTargetLogs: CBEsProcessTargetLog[] = [];
  cbesReportFormCreateByNavigations: CBEsReportForm[] = [];
  cbesReportFormLogUpdateByNavigations: CBEsReportFormLog[] = [];
  cbesReportFormLogUserVerifyNavigations: CBEsReportForm[] = [];
  cbesReportFormUserVerifyNavigations: CBEsReportForm[] = [];
  cbesRoleCreateByNavigations: CBEsRole[] = [];
  cbesRoleUpdateByNavigations: CBEsRole[] = [];
  cbesUserWithRoleCreateByNavigations: CBEsUserWithRole[] = [];
  cbesUserWithRoleUpdateByNavigations: CBEsUserWithRole[] = [];
  cbesUserWithRoleUsers: CBEsUserWithRole[] = [];
  cbesWithSubSupervisorCreateByNavigations: CBEsWithSubSupervisor[] = [];
  cbesWithSubSupervisorUpdateByNavigations: CBEsWithSubSupervisor[] = [];
  cbeswithSupervisorCreateByNavigations: CBEswithSupervisor[] = [];
  cbeswithSupervisorUpdateByNavigations: CBEswithSupervisor[] = [];
  createByNavigation:CBEsUsers | null = null
  inverseCreateByNavigation: CBEsUsers[] = [];
  inverseUpdateByNavigation: CBEsUsers[] = [];
  maturityWithSupervisorCreateByNavigations: MaturityWithSupervisor[] = [];
  maturityWithSupervisorUpdateByNavigations: MaturityWithSupervisor[] = [];
  position = new CBEsPosition
  updateByNavigation:CBEsUsers | null = null
}
