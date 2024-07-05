import CBEsRoleWithPermission from "./CBEsRoleWithPermission";
import CBEsUser from "./CBEsUser";

export default class CBEsPermission{
  id = 0
  name = ""
  createDate:Date|null = null
  updateDate:Date|null = null
  isDeleted = false;
  createBy = 0
  updateBy = 0
  cbesRoleWithPermissions: CBEsRoleWithPermission[] = [];
  createByNavigation = new CBEsUser
  updateByNavigation = new CBEsUser
}
