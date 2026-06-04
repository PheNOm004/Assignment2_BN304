/// <reference path="../pb_data/types.d.ts" />
// Adds 8 new fields to the settings collection:
//   coast_factor, thermal_coeff       — HVAC momentum / thermal shutoff coefficients
//   cost_kwh, watt_heater, watt_cooler, watt_fan  — cost-estimate inputs
//   appliance_min_run                 — minimum appliance run time in minutes
//   appliance_cooldown                — cooldown period in minutes after appliance stops
//
// Uses full unmarshal (all fields) so the existing fields are preserved correctly.
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2769025244")

  unmarshal({
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "help": "", "hidden": false,
        "id": "text3208210256",
        "max": 15, "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false, "primaryKey": true, "required": true, "system": true,
        "type": "text"
      },
      {
        "help": "", "hidden": false,
        "id": "number3326841723",
        "max": null, "min": null,
        "name": "target_temp",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      },
      {
        "help": "", "hidden": false,
        "id": "number2241794181",
        "max": null, "min": null,
        "name": "idle_band",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      },
      {
        "autogeneratePattern": "",
        "help": "", "hidden": false,
        "id": "text760939060",
        "max": 0, "min": 0,
        "name": "city",
        "pattern": "", "presentable": false, "primaryKey": false, "required": false, "system": false,
        "type": "text"
      },
      {
        "help": "", "hidden": false,
        "id": "bool2419939715",
        "name": "is_celsius",
        "presentable": false, "required": false, "system": false,
        "type": "bool"
      },
      {
        "help": "", "hidden": false,
        "id": "number1234567891",
        "max": null, "min": null,
        "name": "coast_factor",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      },
      {
        "help": "", "hidden": false,
        "id": "number1234567892",
        "max": null, "min": null,
        "name": "thermal_coeff",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      },
      {
        "help": "", "hidden": false,
        "id": "number1234567893",
        "max": null, "min": null,
        "name": "cost_kwh",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      },
      {
        "help": "", "hidden": false,
        "id": "number1234567894",
        "max": null, "min": null,
        "name": "watt_heater",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      },
      {
        "help": "", "hidden": false,
        "id": "number1234567895",
        "max": null, "min": null,
        "name": "watt_cooler",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      },
      {
        "help": "", "hidden": false,
        "id": "number1234567896",
        "max": null, "min": null,
        "name": "watt_fan",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      },
      {
        "help": "", "hidden": false,
        "id": "number1234567897",
        "max": null, "min": null,
        "name": "appliance_min_run",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      },
      {
        "help": "", "hidden": false,
        "id": "number1234567898",
        "max": null, "min": null,
        "name": "appliance_cooldown",
        "onlyInt": false, "presentable": false, "required": false, "system": false,
        "type": "number"
      }
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2769025244")

  // Remove only the 8 new fields; leave the original schema intact
  ["number1234567891","number1234567892","number1234567893",
   "number1234567894","number1234567895","number1234567896",
   "number1234567897","number1234567898"].forEach(function(id){
    collection.fields.removeById(id)
  })

  return app.save(collection)
})
