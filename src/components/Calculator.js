import { defineComponent, reactive, ref } from "vue";
import { conditions } from './conditions'

export default defineComponent({
  name: 'StoneBalancingCalculator',
  setup() {

    const days = ref();
    const persons = ref();
    const conditionsValue = ref(0);
    const money = ref();
    const labourHours = ref();
    const artContribution = reactive({
        masterpieceGift: null,
        production: null,
        venue: null,
    });

    return {
        days,
        persons,
        money,
        labourHours,
        artContribution,
        conditionsValue,
        conditions
    }
  }
});
