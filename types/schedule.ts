export interface AllocationData {
  id: string;
  subclasscode: string;
  seatavailable: number;
  faretotamount: number;
  isVip: number;
}

export interface ScheduleData {
  noka: string;
  trainname: string;
  stopdeparture: string;
  stoparrival: string;
  allocationDatas: AllocationData[];
}

export interface AvailabilityData {
  tripdate: string;
  stasiunnameorg: string;
  stasiunnamedes: string;
  stasiuncodeorg: string;
  stasiuncodedes: string;
  stasiuncodeorgdisplay: string;
  stasiuncodedesdisplay: string;
  stasiunnameorgdisplay: string;
  stasiunnamedesdisplay: string;
  scheduleDatas: ScheduleData[];
}

export interface ApiResponse {
  response: {
    availabilitydatalist: AvailabilityData[];
    familystatus: number;
  };
  status: string;
  message: string;
}
