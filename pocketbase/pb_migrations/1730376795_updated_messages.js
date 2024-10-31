/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fgegwjylnkfyu71")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uiahbfe5",
    "name": "chat",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "30kpndu4d6k28h1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fgegwjylnkfyu71")

  // remove
  collection.schema.removeField("uiahbfe5")

  return dao.saveCollection(collection)
})
