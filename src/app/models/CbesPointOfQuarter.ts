import CBEsComment from './CBEsComment';
import CBEsQuarterlyScore from './CBEsQuarterlyScore';

export default class CBEsPointOfQuarter {
  id = 0;
  targetPoint = 0;
  resultPoint = 0;
  quarter = 0;
  createDate = new Date();
  updateDate = new Date();
  isDeleted = false;
  cbesQuarterlyScoreId = 0;
  cbesQuarterlyScore = new CBEsQuarterlyScore();
  cbesComments: CBEsComment[] = [];
}
