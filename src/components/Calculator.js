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

    const activeArtContributionType = ref('');

    const isOkayWithDailyContribution = ref(null);

    const getCalculationResult = () => {
      const result = isOkayWithDailyContribution.value
        // D*R —(X/10 + Y + A/30 + B/20 + C/20)
        ? days.value *
          conditionsValue.value -
          (
            money.value/10 || 0 +
            labourHours.value || 0 +
            artContributionValue.value/30 || 0
          )
          
        // D*R + 2PND — (X/10 + Y + A/30 + B/20 + C/20)
        : days.value *
          conditionsValue.value +
          2 * persons.value * days.value -
          (
            money.value/10 || 0 +
            labourHours.value || 0 +
            artContributionValue.value/30 || 0
          );

      return Number(result).toFixed();
    }

    return {
      days,
      persons,
      money,
      labourHours,
      conditionsValue,
      conditions,
      artContributionValue,
      activeArtContributionType,
      artContributionOptions,
      isOkayWithDailyContribution,
      getCalculationResult,
    }
  }
});
