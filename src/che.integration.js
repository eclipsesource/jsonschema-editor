function updateBuildingsEditorData(element, data) {
  console.log("Initializing JSON Schema Editor Example...");
  if (element.firstChild){
    element.firstChild.remove();
  }

  var jsonSchemaEditor = document.createElement('jsonschema-editor');
  jsonSchemaEditor.data = data;

  element.appendChild(jsonSchemaEditor);
}
