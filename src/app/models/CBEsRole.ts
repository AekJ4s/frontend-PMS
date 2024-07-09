import CBEsRoleWithPermission from "./CBEsRoleWithPermission";
import CBEsUser from "./CBEsUser";
import CBEsUserWithRole from "./CBEsUserWithRole";

export default class CBEsRole{
  id = 0
  name = "บทบาทใหม่"
  createDate:Date|null = new Date()
  updateDate:Date|null = new Date()
  isDeleted = false;
  isLastDelete = false;
  createBy = 0
  updateBy = 0
  cbesRoleWithPermissions : CBEsRoleWithPermission[] = []
  cbesUserWithRole : CBEsUserWithRole[] = []
  createByNavigation = new CBEsUser
  updateByNavigation = new CBEsUser
}
