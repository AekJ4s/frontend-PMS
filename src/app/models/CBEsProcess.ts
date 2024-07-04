import CBEs from "./CBEs"
import CbesIndicator from "./CBEsIndicator"
import CBEsProcessLog from "./CBEsProcessLog"
import CBEsProcessPlanning from "./CBEsProcessPlanning"
import CBEsProcessResult from "./CBEsProcessResult"
import CBEsProcessTarget from "./CbesProcessTarget"
import CBEsMaturities from "./MaturityWithSupervisor"

export default class CBEsProcess{
  id = 0
  name = ""
  weight = 0
  createdate = new Date()
  updatedate = new Date()
  isDeleted = false
  processHeaderId = 0
  cbesId = 0
  cbes = new CBEs
  cbesIndicators : CbesIndicator[] = []
  cbesMaturities : CBEsMaturities[] = []
  cbesProcessLog : CBEsProcessLog[] = []
  cbesProcessPlanning: CBEsProcessPlanning[] = []
  cbesProcessResults: CBEsProcessResult[] = []
  cbesProcessTargets: CBEsProcessTarget[] = []
  inverseProcessHeader: CBEsProcess[] = []
  cbesProcess = new CBEsProcess
}
