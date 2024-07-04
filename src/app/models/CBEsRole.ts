import CBEsRoleWithPermission from "./CBEsRoleWithPermission";
import CBEsUser from "./CBEsUser";
import CBEsUserWithRole from "./CBEsUserWithRole";

export default class CBEsRole{
  id = 0
  name = ""
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false;
  isLastDelete = false;
  createBy = 0
  updateBy = 0
  cbesRoleWithPermissions : CBEsRoleWithPermission[] = []
  cbesUserWithRoles : CBEsUserWithRole[] = []
  createByNavigation = new CBEsUser
  updateByNavigation = new CBEsUser
}
