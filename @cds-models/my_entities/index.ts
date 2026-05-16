// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './..';
import * as __ from './../_';

// entity 'Order'
export function _OrderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Order extends _._cuidAspect(_._managedAspect(Base)) {
    declare parameters_productType?: string | null
    declare parameters_monitoring?: Array<MonitoringInput>
    declare monitoringInput?: Array<MonitoringInput>
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Order> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<Order>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class Order extends _OrderAspect(__.Entity) {}
Object.defineProperty(Order, 'name', { value: 'my_entities.Orders' })
Object.defineProperty(Order, 'is_singular', { value: true })
export class Orders extends Array<Order> {$count?: number}
Object.defineProperty(Orders, 'name', { value: 'my_entities.Orders' })
