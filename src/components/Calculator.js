import { defineComponent, reactive, ref, watch } from "vue";
import { conditions } from './conditions'

export default defineComponent({
  name: 'StoneBalancingCalculator',
  setup() {

    const artContributionOptions = [
      'передам в дар произведение стоимостью', 'подарю продукцию на сумму', 'проведу публичное мероприятие'
    ];

    const days = ref();
    const persons = ref();
    const conditionsValue = ref(0);
    const money = ref();
    const labourHours = ref();
    const artContributionValue = ref();

    const contributionType = ref('');
    const activeArtContributionType = ref('');

    return {
      days,
      persons,
      money,
      labourHours,
      conditionsValue,
      conditions,
      contributionType,
      artContributionValue,
      activeArtContributionType,
      artContributionOptions,
    }
  }
});
