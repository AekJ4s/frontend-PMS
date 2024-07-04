import CbesIndicator from "./CBEsIndicator"
import CBEsPlanning from "./CBEsPlanning"
import CBEsQuarterlyScore from "./CBEsQuarterlyScore"

export default class CBEsActivity{
  id = 0
  name = ""
  createdate = new Date()
  updatedate = new Date()
  isDeleted = false
  headerId = ""
  cbesPlanningId = ""
  cbesIndicator : CbesIndicator[] = []
  cbesPlanning = new CBEsPlanning
  cbesQuarterlyScore : CBEsQuarterlyScore[] = []
  header = new CBEsActivity
  inverseHeader : CBEsActivity[] = []

}
