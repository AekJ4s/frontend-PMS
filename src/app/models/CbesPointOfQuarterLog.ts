import CBEsQuarterlyScore from "./CBEsQuarterlyScore";

export default class CBEsPointOfQuarterLog {
  id = 0;
  targetPoint = 0
  resultPoint = 0
  quarter = 0
  createDate = new Date()
  updateDate = new Date()
  isDeleted = false
  cbesQuarterlyScoreLogId = 0;
  cbesQuarterlyScoreLog = new CBEsQuarterlyScore();
}
