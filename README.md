# vue-g2-plot

use [`gl-plot`](https://g2plot.antv.vision/zh/docs/manual/introduction) in vue2.

### install

```bash
$ npm i -D vue-g2-charts @vue/composition-api @antv/g2plot
# OR
$ yarn add -D vue-g2-charts @vue/composition-api @antv/g2plot

# @vue/composition-api @antv/g2plot is needed
```

### props

- define chart type by config.type
- data and config are passthrough to g2-plot

| props  |               值                |  示例 |
| ------ | :-----------------------------: | ----: |
| data   |          [g2-plot.data](https://g2plot.antv.vision/zh/docs/manual/plots/line#data-)           |       |
| config | g2-plot.config & { type: 'Line' \| 'Bar' \| ... } |  |

### usage

::: demo
<template>

  <div>
    <g2-charts :data="data" :config="config" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import G2Charts from 'vue-g2-charts';

export default defineComponent({
  components: {
    G2Charts,
  },
  setup() {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ];

    const config = {
      type: 'Line',
      title: {
        visible: true,
        text: '带数据点的折线图',
      },
      description: {
        visible: true,
        text: '将折线图上的每一个数据点显示出来，作为辅助阅读。',
      },
      forceFit: true,
      padding: 'auto',
      data,
      xField: 'year',
      yField: 'value',
      point: {
        visible: true,
      },
      label: {
        visible: true,
        type: 'point',
      },
    };
    return {
      config,
      data,
    };
  },
});
</script>

:::
