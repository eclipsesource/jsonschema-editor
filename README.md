# JSON Schema Editor

**WORK IN PROGRESS; DOES NOT WORK PROPERLY, YET**

An editor to create and modify JSON Schemata.
The editor is based on [JsonEditor](https://github.com/eclipsesource/jsoneditor).

## Installation
To install the UI Schema Editor you need to checkout the following repositories:
- [JsonEditor](https://github.com/eclipsesource/jsoneditor) on branch master
- [JsonForms](https://github.com/eclipsesource/jsonforms/tree/jsonforms2) on branch jsonforms2

The directories should be located next to the JSON schema editor,
e.g.
```
folder
  |- jsoneditor
  |- jsonforms
  |- jsonschema-editor
```
1. Install dependecies for JsonForms and JsonEditor by executing `npm install` in their directories.

1. Build JsonForms by executing `npm run build` in the jsonforms directory.

1. Install the result in JsonEditor by executing `npm install ../jsonforms` in the jsoneditor directory.

1. Build JsonEditor with `npm run build`

1. Got to the jsonschema-editor directory and execute `npm install`

1. Optional: Run `npm run build` to build a node module containing the JSON schema editor element

## Run
Run the JSON Schema Editor with `npm run dev`.

You can now use the editor at http://localhost:8080/

Note: You might not see the root element even if it's there. Just move the mouse to the top of the lower left box beneath the UI Schema Editor headline.


## Attribution:
/local-schemas/json-schema-04.ts and /local-schemas/json-schema.ts are based on the schema definitions of https://github.com/json-schema-org/json-schema-spec
