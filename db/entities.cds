namespace my_entities;

using {cuid, managed} from '@sap/cds/common';
using { my_types.OrderParameters } from './types';
using { my_types.MonitoringInput } from './types';

entity Orders : cuid, managed {
    parameters : OrderParameters;
    monitoringInput : many MonitoringInput;
}
