<template>
  <div>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4" xl="3" v-for="(v, k) in divList" :key="k">
        <v-card class="card-size pa-2 overflow-auto">
          <svg :id="v" class="svg-size chart" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as d3 from 'd3'
@Component({})
export default class D3 extends Vue {
  private divList: string[] = ['barI', 'treeI', 'forceI']

  private initBarI() {
    const data = [4, 8, 15, 16, 23, 20]
    const width = 350
    const barHeight = 26

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data) as any])
      .range([0, width])

    const chart = d3
      .select('#barI')
      .attr('width', width)
      .attr('height', barHeight * data.length)

    const bar = chart
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr(
        'transform',
        (d: any, i: number) => 'translate(0,' + i * barHeight + ')'
      )

    bar
      .append('rect')
      .attr('width', x)
      .attr('height', barHeight - 1)

    bar
      .append('text')
      .attr('x', (d: any) => x(d) - 6)
      .attr('y', barHeight / 2)
      .attr('dy', '.35em')
      .text((d: any) => d)
  }

  private initTreeI() {
    const duration: number = 750
    const width: number = 800
    const height: number = 620
    const svg = d3
      .select('#treeI')
      .attr('viewBox', [-10, -10, width, height] as any)
    const layoutTree = d3.tree().size([width - 20, height - 20])
    const renderLink = d3
      .linkVertical()
      .x((d: any) => d.x)
      .y((d: any) => d.y)
    const Node: any = d3.hierarchy.prototype.constructor
    const root = new Node()
    const nodes: any = [root]
    const links: any = []

    layoutTree(root)

    let link: any = svg
      .append('g')
      .attr('fill', 'none')
      .attr('stroke', '#000')
      .selectAll('.link')

    let node: any = svg
      .append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .selectAll('.node')

    const interval = d3.interval(() => {
      if (nodes.length >= 5) {
        return interval.stop()
      }

      // Add a new node to a random parent.
      const parent = nodes[(Math.random() * nodes.length) | 0] // tslint:disable-line
      const child = Object.assign(new Node(), {
        parent,
        depth: parent.depth + 1
      })
      if (parent.children) {
        parent.children.push(child)
      } else {
        parent.children = [child]
      }

      nodes.push(child)
      links.push({ source: parent, target: child })

      // Recompute the layout.
      layoutTree(root)

      // Add entering nodes in the parent’s old position.
      node = node.data(nodes)
      node = node
        .enter()
        .append('circle')
        .attr('class', 'node')
        .attr('r', 4)
        .attr('cx', (d: any) => (d.parent ? d.parent.px : (d.px = d.x))) // tslint:disable-line
        .attr('cy', (d: any) => (d.parent ? d.parent.py : (d.py = d.y))) // tslint:disable-line
        .merge(node)

      // Add entering links in the parent’s old position.
      link = link.data(links)
      link = link
        .enter()
        .insert('path', '.node')
        .attr('class', 'link')
        .attr('d', (d: any) => {
          const o = { x: d.source.px, y: d.source.py }
          return renderLink({ source: o, target: o } as any)
        })
        .merge(link)

      // Transition nodes and links to their new positions.
      const t = svg.transition().duration(duration)

      link.transition(t).attr('d', renderLink)

      node
        .transition(t)
        .attr('cx', (d: any) => (d.px = d.x)) // tslint:disable-line
        .attr('cy', (d: any) => (d.py = d.y)) // tslint:disable-line
    }, duration)
  }

  private initForceI() {
    const jsonData = {
      nodes: [
        {
          id: 'Myriel',
          group: 1
        },
        {
          id: 'Napoleon',
          group: 2
        },
        {
          id: 'Feuilly',
          group: 3
        }
      ],
      links: [
        {
          source: 'Myriel',
          target: 'Napoleon',
          value: 1
        },
        {
          source: 'Napoleon',
          target: 'Feuilly',
          value: 2
        },
        {
          source: 'Feuilly',
          target: 'Myriel',
          value: 3
        }
      ]
    }
    const width = 350
    const height = 300
    const color = d3.scaleOrdinal(d3.schemeCategory10)
    const graph: any = jsonData
    const label: any = {
      nodes: [],
      links: []
    }
    graph.nodes.forEach((d: any, i: number) => {
      label.nodes.push({ node: d })
      label.nodes.push({ node: d })
      label.links.push({
        source: i * 2,
        target: i * 2 + 1
      })
    })
    const labelLayout = d3
      .forceSimulation(label.nodes)
      .force('charge', d3.forceManyBody().strength(-50))
      .force(
        'link',
        d3
          .forceLink(label.links)
          .distance(0)
          .strength(2)
      )

    d3.forceSimulation(graph.nodes)
      .force('charge', d3.forceManyBody().strength(-3000))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(1))
      .force('y', d3.forceY(height / 2).strength(1))
      .force(
        'link',
        d3
          .forceLink(graph.links)
          .id((d: any) => d.id)
          .distance(50)
          .strength(1)
      )
      .on('tick', ticked)

    const adjlist: any = []

    graph.links.forEach((d: any) => {
      adjlist[d.source.index + '-' + d.target.index] = true
      adjlist[d.target.index + '-' + d.source.index] = true
    })

    const svg: any = d3
      .select('#forceI')
      .attr('width', width)
      .attr('height', height)
    const container = svg.append('g')

    svg.call(
      d3
        .zoom()
        .scaleExtent([0.1, 4])
        .on('zoom', () => {
          container.attr('transform', d3.event.transform)
        })
    )

    const link = container
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graph.links)
      .enter()
      .append('line')
      .attr('stroke', '#aaa')
      .attr('stroke-width', '1px')

    const node = container
      .append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(graph.nodes)
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('fill', (d: any) => color(d.group))

    const labelNode = container
      .append('g')
      .attr('class', 'labelNodes')
      .selectAll('text')
      .data(label.nodes)
      .enter()
      .append('text')
      .text((d: any, i: number) => i % 2 === 0 ? '' : d.node.id)
      .style('fill', '#555')
      .style('font-family', 'Arial')
      .style('font-size', 12)
      .style('pointer-events', 'none')

    function ticked() {
      node.call(updateNode)
      link.call(updateLink)

      labelLayout.alphaTarget(0.3).restart()
      labelNode.each(function(this: typeof labelNode, d: any, i: number) {
        if (i % 2 === 0) {
          d.x = d.node.x
          d.y = d.node.y
        } else {
          const b = this.getBBox()
          const diffX = d.x - d.node.x
          const diffY = d.y - d.node.y

          const dist = Math.sqrt(diffX * diffX + diffY * diffY)

          let shiftX = (b.width * (diffX - dist)) / (dist * 2)
          shiftX = Math.max(-b.width, Math.min(0, shiftX))
          const shiftY = 16
          this.setAttribute(
            'transform',
            'translate(' + shiftX + ',' + shiftY + ')'
          )
        }
      })
      labelNode.call(updateNode)
    }

    function fixna(x: any) {
      if (isFinite(x)) {
        return x
      } else {
        return 0
      }
    }

    function updateLink(linkObj: any) {
      linkObj
        .attr('x1', (d: any) => {
          return fixna(d.source.x)
        })
        .attr('y1', (d: any) => {
          return fixna(d.source.y)
        })
        .attr('x2', (d: any) => {
          return fixna(d.target.x)
        })
        .attr('y2', (d: any) => {
          return fixna(d.target.y)
        })
    }

    function updateNode(nodeObj: any) {
      nodeObj.attr('transform', (d: any) => {
        return 'translate(' + fixna(d.x) + ',' + fixna(d.y) + ')'
      })
    }

  }

  private mounted() {
    console.info('D3')
    this.initBarI()
    this.initTreeI()
    this.initForceI()
  }
}
</script>
<style scoped lang="scss">
.card-size {
  width: 100%;
  height: 400px;
}

.overflow-auto {
  overflow: auto;
}

.svg-size {
  width: 100%;
  height: calc(100% - 8px);
}
</style>
<style>
.chart rect {
  fill: steelblue;
}

.chart text {
  fill: white;
  font: 10px sans-serif;
  text-anchor: end;
}
</style>
