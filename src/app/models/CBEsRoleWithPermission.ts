import CBEsPermission from "./CBEsPermission";
import CBEsRole from "./CBEsRole";

export default class CBEsRoleWithPermission{
  id = 0
  isChecked = false;
  createDate = new Date();
  updateDate = new Date();
  isDeleted = false;
  roleId = 0;
  permissionId = 0;
  createBy = 0;
  updateBy = 0;
  cbesPermission = new CBEsPermission;
  cbesRole = new CBEsRole;
}
