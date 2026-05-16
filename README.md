@cap-js/cds-typer 0.39.0 – Namespace resolving bug
==================================================

1. [Description](#description)
2. [License](#license)

Description
-----------

This repository contains a minimal "working" example to reproduce a bug that
has been introduced in `@cap-js/cds-typer` version 0.39.0. The generated types
don't build with TypeScript, anymore. Run `npm run build` to reproduce:

```text
Error: @cds-models/my_entities/index.ts(9,43): error TS2304: Cannot find name 'MonitoringInput'.
@cds-models/my_entities/index.ts(10,37): error TS2304: Cannot find name 'MonitoringInput'.
```

The bug is triggered by a CDS entity that includes an array whose type is defined
in another namespace. For example:

**File: db/entities.cds**

```cds
namespace my_entities;

using { my_types.MonitoringInput } from './types';

entity Orders : cuid, managed {
    monitoring : many MonitoringInput;
}
```

**File: db/types.cds**

```cds
namespace my_types;

type MonitoringInput { ... }
```

The source files include a seconds example, where `MonitoringType` is referenced
indirectly through another structured type, becaue that was the original constelation
where the bug appeared in production.

License
-------

This work is marked CC0 1.0.
