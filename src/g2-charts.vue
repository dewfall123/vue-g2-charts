<template>
  <div ref="chartRef"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from '@vue/composition-api';
import * as G2Plot from '@antv/g2plot';

export default defineComponent({
  props: {
    config: Object,
    data: Array,
  },
  setup(props) {
    const chartRef = ref(null);

    onMounted(() => {
      if (!chartRef.value) {
        console.error('[vue-g2-charts] chartRef not found ' + chartRef);
      }
      const el = (chartRef.value as unknown) as HTMLDivElement;
      const plotInstant = new G2Plot[props.config?.type ?? 'Line'](el, {
        ...props.config,
        data: props.data,
      });

      plotInstant.render();

      watch(
        () => props.config,
        () => {
          plotInstant.updateConfig(props.config);
        },
      );

      watch(
        () => props.data,
        () => {
          plotInstant.changeData(props.data);
        },
      );
    });

    return {
      chartRef,
    };
  },
});
</script>
