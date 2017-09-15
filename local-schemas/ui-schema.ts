export const uischema = {
  'type': 'VerticalLayout',
  'elements': [
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/$ref' }
    },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/title' }
    },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/id' }
    },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/$schema' }
    },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/type' }
    },
    // start conditional number properties
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/maximum' },
      'rule': {
        'effect': 'SHOW',
        'condition': {
          'expectedValue': 'number',
          'scope': { '$ref': '#/properties/type' }
        }
      }
    },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/exclusiveMaximum' },
      'rule': {
        'effect': 'SHOW',
        'condition': {
          'expectedValue': 'number',
          'scope': { '$ref': '#/properties/type' }
        }
      }
    },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/minimum' },
      'rule': {
        'effect': 'SHOW',
        'condition': {
          'expectedValue': 'number',
          'scope': { '$ref': '#/properties/type' }
        }
      }
    },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/exclusiveMinimum' },
      'rule': {
        'effect': 'SHOW',
        'condition': {
          'expectedValue': 'number',
          'scope': { '$ref': '#/properties/type' }
        }
      }
    },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/multipleOf' },
      'rule': {
        'effect': 'SHOW',
        'condition': {
          'expectedValue': 'number',
          'scope': { '$ref': '#/properties/type' }
        }
      }
    },
    // end conditional number properties
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/properties' },
      'rule': {
        'effect': 'SHOW',
        'condition': {
          'expectedValue': 'object',
          'scope': { '$ref': '#/properties/type' }
        }
      }
    },
    // {
    //   'type': 'Control',
    //   'scope': { '$ref': '#/properties/properties' }
    // },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/items' },
      'rule': {
        'effect': 'SHOW',
        'condition': {
          'expectedValue': 'array',
          'scope': { '$ref': '#/properties/type' }
        }
      }
    },
    {
      'type': 'Control',
      'scope': { '$ref': '#/properties/definitions' }
    }
  ]
};
