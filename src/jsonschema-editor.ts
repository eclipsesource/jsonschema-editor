import { JsonForms, JsonSchema } from 'jsonforms';
import { JsonEditor } from '@eclipsesource/jsoneditor';
import '@eclipsesource/jsoneditor';
// import './materialized.tree.renderer';
import { imageMapping, labelMapping } from './jsonschema-config';
// TODO correct schema
import { jsonSchema } from '../local-schemas/json-schema-04';
import './object.renderer';
import { uischema } from '../local-schemas/ui-schema';

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
    this.editor.registerDetailSchema('#jsonschema', uischema);
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
    this.configureSchema();
    this.registerUiSchemas();
    // TODO remove
    JsonForms.uischemaRegistry.register(uischema, (schema, data) =>
      schema.id !== undefined && schema.id === '#jsonschema' ? 2 : -1);

    // JsonForms.config.setIdentifyingProp('_id');
    this.editor.data = this.dataObject;
    this.appendChild(this.editor);
  }
}

if (!customElements.get('jsonschema-editor')) {
  customElements.define('jsonschema-editor', JsonSchemaEditor);
}
