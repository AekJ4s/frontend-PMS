import CBEsProcess from "./CBEsProcess";
import CBEsProcessResult from "./CBEsProcessResult";

export default class CBEsProcessTarget {
  id = 0;
  year = 0;
  targetPoint = 0;
  cbesProcessId = 0;
  cbesProcess = new CBEsProcess();
  cbesProcessResults: CBEsProcessResult[] = [];
}
