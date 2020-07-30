import { defineComponent, ref, onMounted, watch } from '@vue/composition-api';
import G2Plot from '@antv/g2plot';
import { openBlock, createBlock } from 'vue';

var script = defineComponent({
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
            const el = chartRef.value;
            const plotInstant = new G2Plot[props.config?.type ?? 'Line'](chartRef, {
                ...props.config,
                data: props.data,
            });
            watch(() => props.config, () => {
                plotInstant.updateConfig(props.config);
            });
            watch(() => props.data, () => {
                plotInstant.changeData(props.data);
            });
        });
        return {
            chartRef,
        };
    },
});

const _hoisted_1 = { ref: "chartRef" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, null, 512 /* NEED_PATCH */))
}

script.render = render;
script.__file = "src/g2-charts.vue";

export default script;
