import CBEs from "./CBEs";
import CBEsPosition from "./CBEsPosition";
import CBEsUser from "./CBEsUser";

export default class CBEsWithSubSupervisor {
  id = 0;
  createDate = new Date();
  updateDate = new Date();
  isDeleted = false;
  createBy = 0;
  updateBy = 0;
  cbesId = 0;
  positionId = 0;
  cbes = new CBEs();
  createByNavigation = new CBEsUser();
  position = new CBEsPosition();
  updateByNavigation = new CBEsUser();
}
