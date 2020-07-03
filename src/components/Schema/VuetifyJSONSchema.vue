<template>
  <div>
    <v-form v-model="valid">
      <v-jsf v-model="model" :schema="schema" :options="options" />
    </v-form>
    <v-card dark outlined>
      <pre>{{model}}</pre>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VJsf from '@koumoul/vjsf'
import '@koumoul/vjsf/dist/main.css'

@Component({
  components: {
    VJsf
  }
})
export default class VuetifyJSONSchemaComponent extends Vue {
  private valid: boolean = true
  private model: any = null
  private schema: any = {
    type: 'object',
    properties: {
      stringProp: {
        type: 'string',
        title: `I'm a string`,
        description: 'This description is used as a help message.'
      },
      stringTextareaProp: {
        'type': 'string',
        'title': `I'm a string in a textarea`,
        'x-display': 'textarea'
      },
      numberProp: {
        'type': 'number', // tslint:disable-line
        'title': `I'm a number` // tslint:disable-line
      },
      integerProp: {
        type: 'integer',
        title: `I'm an integer`
      },
      integerSliderProp: {
        'type': 'integer',
        'title': `I'm an integer in a slider`,
        'x-display': 'slider',
        'minimum': 0,
        'maximum': 5
      },
      booleanProp: {
        type: 'boolean',
        title: `I'm a boolean`
      },
      stringArrayProp: {
        type: 'array',
        title: `I'm an array of strings`,
        items: {
          type: 'string'
        }
      },
      integerArrayProp: {
        type: 'array',
        title: `I'm an array of integers`,
        items: {
          type: 'integer'
        }
      }
    }
  }
  private options: any = null
}
</script>
<style scoped lang="scss">
</style>
