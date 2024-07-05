import CBEsPermission from "./CBEsPermission";
import CBEsRole from "./CBEsRole";

export default class CBEsRoleWithPermission{
  id = 0
  isChecked = false;
  createDate:Date|null = null;
  updateDate:Date|null = null;
  isDeleted = false;
  roleId = 0;
  permissionId = 0;
  createBy = 0;
  updateBy = 0;
  permission = new CBEsPermission;
  role = new CBEsRole;
}
