import CBEsRole from "./CBEsRole";
import CBEsUser from "./CBEsUser";

export default class CBEsUserWithRole{
  id = 0
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false;
  createBy = 0;
  updateBy = 0;
  role_id = 0;
  user_id = 0;
}
