/// <reference path="../pb_data/types.d.ts" />
// Adds coast_asymmetry field to the settings collection.
// Fixes: patchSettings() was sending an unknown field, causing PocketBase to reject
// the entire PATCH — making cooldown and coast direction changes non-persistent.
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2769025244")

  collection.fields.add(new Field({
    "help": "", "hidden": false,
    "id": "number1234567899",
    "max": null, "min": null,
    "name": "coast_asymmetry",
    "onlyInt": false, "presentable": false, "required": false, "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2769025244")
  collection.fields.removeById("number1234567899")
  return app.save(collection)
})
