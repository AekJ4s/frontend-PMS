import CBEsActivity from "./CBEsActivity";
import CBEsPointOfQuarter from "./CbesPointOfQuarter";

export default class CBEsQuarterlyScore {
    id = 0;
    year: number | null = null;
    createDate: Date | null = null;
    updateDate: Date | null = null;
    isDeleted: boolean | null = null;
    cbesActivityId = 0;
    cbesActivity = new CBEsActivity();
    cbesPointOfQuarters: CBEsPointOfQuarter[] = [];
}
