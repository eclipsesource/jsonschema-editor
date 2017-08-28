import { JsonForms, JsonSchema } from 'jsonforms';
import { JsonEditor } from '@eclipsesource/jsoneditor';
import '@eclipsesource/jsoneditor';
// import './object.renderer.ts';
// import './materialized.tree.renderer';
import { imageMapping, labelMapping } from './jsonschema-config';
// TODO correct schema
import { jsonSchema } from '../local-schemas/json-schema-04';

export class JsonSchemaEditor extends HTMLElement {
  private dataObject: Object;
  private connected = false;
  private editor: JsonEditor;

  constructor() {
    super();
  }
  connectedCallback(): void {
    this.connected = true;
    this.render();
  }
  diconnectedCallback(): void {
    this.connected = false;
  }

  set data(data: Object) {
    this.dataObject = data;
    this.render();
  }

  get data(): Object {
    return this.dataObject;
  }

  get schema(): JsonSchema {
    return jsonSchema;
  }
  private registerUiSchemas(): void {
    // const callback = uischemas => {
    //   register(uischemas.attribute_view, 'http://www.eclipse.org/emf/2002/Ecore#//EAttribute');
    //   register(uischemas.eclass_view, 'http://www.eclipse.org/emf/2002/Ecore#//EClass');
    //   register(uischemas.datatype_view, 'http://www.eclipse.org/emf/2002/Ecore#//EDataType');
    //   register(uischemas.enum_view, 'http://www.eclipse.org/emf/2002/Ecore#//EEnum');
    //   register(uischemas.epackage_view, 'http://www.eclipse.org/emf/2002/Ecore#//EPackage');
    //   register(uischemas.reference_view, 'http://www.eclipse.org/emf/2002/Ecore#//EReference');
    // };
    // this.loadFromRest('ecoreUiSchema', callback);
  }

  private configureLabelMapping() {
    this.editor.setLabelMapping(labelMapping);
  }

  private configureImageMapping() {
    this.editor.setImageMapping(imageMapping);
  }

  private configureSchema() {
    this.editor.schema = jsonSchema;
  }

  private render() {
    if (!this.connected || this.dataObject === undefined
        || this.dataObject === null) {
      return;
    }
    if (this.editor === undefined) {
      this.editor = document.createElement('json-editor') as JsonEditor;
    }

    // TODO comment in when configured
    // this.configureImageMapping();
    this.configureLabelMapping();
    this.registerUiSchemas();
    this.configureSchema();

    // JsonForms.config.setIdentifyingProp('_id');
    this.editor.data = this.dataObject;
    this.appendChild(this.editor);
  }
}

// method to register ui schemas
const register = (uischema, uri) => {
  JsonForms.uischemaRegistry.register(uischema, (schema, data) =>
    data.eClass === uri || schema.properties !== undefined
    && schema.properties.eClass !== undefined
    && schema.properties.eClass.default === uri ? 2 : -1);
};

if (!customElements.get('jsonschema-editor')) {
  customElements.define('jsonschema-editor', JsonSchemaEditor);
}
