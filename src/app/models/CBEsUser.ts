import CBEsPosition from "./CBEsPosition"

export default class CBEsUser{
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
  position_id = 0;
}
