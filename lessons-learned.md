create a new module
```bash
nest generate module {name}
```
nest automatically links {name}.module to app.module.ts

within each modules we want to create the required hiearchy
```bash
nest generate controller {module.name}
```
nest automatically adds the controller to the module 
the controller handles all of the endpoint requests (GET/PATCH/DELETE...)

each controller has a service layer where the querying logic (db or simple array) should live.
```bash
nest generate service {module.name}
```

or you can generate everything at once using 
```bash
nest g resource {module.name}
```

NestJs has 2 types of pipes:
* transform (e.g. string to id) 
* validate
