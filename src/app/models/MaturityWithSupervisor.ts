import CBEsMaturity from "./CBEsMaturity"
import CBEsPosition from "./CBEsPosition"
import CBEsProcess from "./CBEsProcess"
import CBEsUser from "./CBEsUser"

export default class MaturityWithSupervisor{
  id = 0
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false
  createBy = 0
  updateBy = 0
  maturityId = 0
  positionId = 0
  createByNavigation = new CBEsUser
  updateByNavigation = new CBEsUser
  maturity = new CBEsMaturity
  position = new CBEsPosition
}
