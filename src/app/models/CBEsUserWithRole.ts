import CBEsRole from "./CBEsRole";
import CBEsUser from "./CBEsUser";

export default class CBEsUserWithRole{
  id = 0
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false;
  createBy = 0;
  updateBy = 0;
  roleId = 0;
  userId = 0;
  createByNavigation : CBEsUser| null = null
  updateByNavigation : CBEsUser| null = null
  role : CBEsRole | null = null
  user = new CBEsUser
}
