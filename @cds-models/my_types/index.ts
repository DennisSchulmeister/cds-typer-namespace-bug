// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';

// entity 'MonitoringInput'
export function _MonitoringInputAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MonitoringInput extends Base {
    declare monitoringType?: string | null
    declare endDate?: __.CdsDate | null
    declare unlimited?: boolean | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<MonitoringInput>;
    declare static readonly elements: __.ElementsOf<MonitoringInput>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class MonitoringInput extends _MonitoringInputAspect(__.Entity) {}
Object.defineProperty(MonitoringInput, 'name', { value: 'my_types.MonitoringInput' })
Object.defineProperty(MonitoringInput, 'is_singular', { value: true })

// entity 'OrderParameters'
export function _OrderParametersAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class OrderParameters extends Base {
    declare productType?: string | null
    declare monitoring?: Array<MonitoringInput>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<OrderParameters>;
    declare static readonly elements: __.ElementsOf<OrderParameters>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class OrderParameters extends _OrderParametersAspect(__.Entity) {}
Object.defineProperty(OrderParameters, 'name', { value: 'my_types.OrderParameters' })
Object.defineProperty(OrderParameters, 'is_singular', { value: true })
