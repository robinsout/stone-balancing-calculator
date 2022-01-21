import { defineComponent, ref } from "vue";
import { conditions, artContributionOptions } from './selectOptions'

export default defineComponent({
  name: 'StoneBalancingCalculator',
  setup() {

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
