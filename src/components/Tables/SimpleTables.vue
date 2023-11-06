<template>
  <div>
    <v-btn
      color="primary"
      @click="exportExcel"
      >Export-Excel<v-icon right dark> mdi-export </v-icon></v-btn
    >
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { exportJson2Excel } from '@/utils/excel'
import { formatJson } from '@/utils/index'
const tableData = [
  {
    name: 'Frozen Yogurt',
    calories: 159
  },
  {
    name: 'Ice cream sandwich',
    calories: 237
  },
  {
    name: 'Eclair',
    calories: 262
  },
  {
    name: 'Honeycomb',
    calories: 408
  },
  {
    name: 'Donut',
    calories: 452
  }
]

@Component({
  components: {}
})
export default class SimpleTables extends Vue {
  private desserts = tableData

  private exportExcel() {
    // const tHeader = ['name', 'calories']
    const tHeader = ['姓名', 'calories']
    const filterVal = ['name', 'calories']
    const data = formatJson(filterVal, this.desserts)
    exportJson2Excel(tHeader, data, 'table-list')
  }
}
</script>
<style lang="scss" scoped></style>
