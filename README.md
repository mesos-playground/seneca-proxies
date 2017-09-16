# seneca-proxies

Seneca proxies for testing mesos service discovery.

## MathProxy

Example

```node

const proxies = require('@mesos-playground/seneca-proxies');

var math = new proxies.MathProxy({
    host: 'mathService.marathon.l4lb.dcos.directory',
    port: 18650
});

math.sum(1, 2).then(sum=>{
    console.log("Sum:", sum);
});
```

## UuidProxy

Example

```node

const proxies = require('@mesos-playground/seneca-proxies');

var uuid = new proxies.UuidProxy({
    host: 'uuidService.marathon.l4lb.dcos.directory',
    port: 18650
});

uuid.generate().then(id=>{
    console.log("uuid:", id);
});
```
