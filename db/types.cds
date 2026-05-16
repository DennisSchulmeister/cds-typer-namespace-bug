namespace my_types;

type MonitoringInput {
	monitoringType : String;
	endDate : Date;
	unlimited : Boolean;
}

type OrderParameters {
	productType : String;
	monitoring : many MonitoringInput;
}
