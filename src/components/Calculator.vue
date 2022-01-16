<template>
  <div class="page-wrapper">
    <div class="calculator">
      <h1>Дом с печкой - проект взаимопомощи</h1>
      <div class="calculator__description calculator__content-block">
        <p>
          Дом с печкой помогает вам: обеспечивает условия для работы, обучения и отдыха.<br>
          Вы помогаете Дому с печкой: поддерживаeте деньгами, трудом и творчеством.
        </p>
        <h2>Stone Balancing Calculator</h2>
        <p>
          Для удобства расчетов взаимных обязательств есть условная единица: <strong>пьетра (P)</strong>.<br>
          <strong>Пьетра</strong> на итальянском – камень, только в итальянском слово камень женского рода: oдна пьетра.<br>
          Например, одна пьетра – это одна выполненная задача, максимум на час работы. 
        </p>
        <p>
          Например, помоете посуду и уберетесь на кухне после обеда – получите пьетру.
          Приготовите ужин – еще одна пьетра. Не любите мыть посуду? Не умеете готовить?
          Не проблема, найдется другая посильная задача. Кроме того, Дом с печкой можно поддерживать финансово, и получать пьетру за каждые десять евро.
          Но заводить специальный кошелек не придется. 
        </p>
        <p>
          Как это работает на практике? Уже на стадии заявки вы должны решить, сколько часов в день вы готовы помогать по хозяйству.
          Например, помогаете 3 часа и живете бесплатно в общей комнате, где одна ночь – это три пьетры.
          А если хотите жить в отдельной комнате с собственной ванной, это уже 10 пьетр.
          Тогда можно внести 80 евро, получить 8 пьетр, а недостающие две компенсировать помощью по хозяйству. 
        </p>
        <p>
          Мы всем рекомендуем помогать по два часа в день.
          Но если бюджет ограничен, и вы хотите рассчитаться трудом, можете помогать дольше.
          Об этом договариваемся заранее, до вашего приезда.
          Сформулируйте пожелания в заявке, а калькулятор поможет справиться с расчетами.
        </p>
      </div>
      <div class="calculator__inputs calculator__content-block">
        <div class="calculator__inputs__block">
          <h3 class="calculator__inputs__block-title">
            На сколько дней вам хотелось бы остановиться?
          </h3>
          <input
            id="days"
            class="calculator__inputs_input"
            type="text"
            placeholder="Количество дней"
          >
        </div>
        <div class="calculator__inputs__block">
          <h3 class="calculator__inputs__block-title">
            Сколько человек ждать, включая вас?
          </h3>
          <input
            id="persons"
            class="calculator__inputs_input"
            type="text"
            placeholder="Количество персон"
          >
        </div>
        <div class="calculator__inputs__block">
          <h3 class="calculator__inputs__block-title">
            Какие условия размещения вас устроят?
          </h3>
          <select
            id="conditions"
            class="calculator__inputs_input"
          >
            <option
              value=""
              disabled
              selected
            >
              Выберите условия размещения
            </option>
            <option
              v-for="condition, index in conditions"
              :key="index"
              :value="condition.value"
            >
              {{ condition.description }}
            </option>
          </select>
        </div>
        <div class="calculator__inputs__block">
          <h3 class="calculator__inputs__block-title">
            Как вы готовы помочь проекту?
          </h3>
          <div class="calculator__inputs__contribution-option">
            <div>
              <input
                id="money"
                type="radio"
                class="calculator__inputs__contribution-option__radio-button"
                name="contribution"
              >
              <label for="money">
                Деньгами,
                <input
                  type="number"
                  placeholder="введите сумму"
                > евро.
              </label>
            </div>
          </div>
          <div class="calculator__inputs__contribution-option">
            <div>
              <input
                id="labour"
                type="radio"
                class="calculator__inputs__contribution-option__radio-button"
                name="contribution"
              >
              <label for="labour">
                Трудом, могу помогать
                <input
                  type="number"
                  placeholder="введите сумму"
                >
                часов в день, а именно:
              </label>
            </div>
            <ul class="calculator__inputs__contribution-option__list">
              <li>мыть посуду</li>
              <li>убирать территорию</li>
              <li>колоть дрова</li>
              <li>пилить деревья</li>
              <li>возделывать огород</li>
              <li>ухаживать за растениями</li>
              <li>помогать с ремонтом</li>
              <li>готовить</li>
              <li>шить</li>
            </ul>
          </div>
          <div class="calculator__inputs__contribution-option">
            <div>
              <input
                id="art"
                type="radio"
                class="calculator__inputs__contribution-option__radio-button"
                name="contribution"
              >
              <label for="art">
                Культурой и искусством*:
              </label>
            </div>
            <ul class="calculator__inputs__contribution-option__list">
              <li>передам в дар произведение стоимостью в А евро</li>
              <li>
                подарю продукцию на сумму <input
                  type="text"
                  placeholder="введите сумму"
                > евро
              </li>
              <li>
                проведу публичное мероприятие на <input
                  type="text"
                  placeholder="введите сумму"
                > евро
              </li>
            </ul>
            <p>
              <i>
                * Мы включаем в расчет риски и расходы.
                К примеру, вы называете рыночную стоимость произведения, скажем 300 евро.
                Нет гарантии, что нам однажды удастся его продать. А в случае продажи нам
                придется отдать часть суммы на налоги и понести расходы, связанные с хранением
                и организацией продажи произведения. Поэтому произведение в 300 евро это 10 пьетр.  
              </i>
            </p>
          </div>
        </div>
        <div class="calculator__inputs__block">
          <h3 class="calculator__inputs__block-title">
            Готовы ли вы наряду с остальными резидентами вносить наличными<br>по 20 евро в день на еду и другие неизбежные расходы?
          </h3>
          <div class="calculator__inputs__daily-contribution-option">
            <input
              id="acceptDailyContribution"
              type="radio"
              class="calculator__inputs__contribution-option__radio-button"
              name="dailyContribution"
            >
            <label for="acceptDailyContribution">
              Не проблема, внесу наличными в день приезда 20ND за весь период
            </label>
          </div>
          <div class="calculator__inputs__daily-contribution-option">
            <input
              id="declineDailyContribution"
              type="radio"
              class="calculator__inputs__contribution-option__radio-button"
              name="dailyContribution"
            >
            <label for="declineDailyContribution">
              У меня финансовые трудности, предпочитаю компенсировать эту сумму трудом или творчеством 
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { conditions } from './conditions'

export default {
  name: 'HelloWorld',
  setup() {

    return {
      conditions
    }
  }
}
</script>

<style scoped lang="scss">
.page-wrapper { 
  display: flex;
  justify-content: center;

  .calculator {
    max-width: 900px;

    &__content-block {
      margin-bottom: 28px;
    }

    &__inputs {

      &__block {
        margin-bottom: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;

        &-title {
          margin-bottom: 10px;
        }
      }

      &_label {
        margin-bottom: 8px;
      }

      &_input {
        display: block;
      }

      &__contribution-option {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 14px;

        &__list {
          margin-left: 42px;
        }
      }

      &__daily-contribution-option {
        margin-bottom: 10px;
      }
    }
  }
}

p {
  text-align: justify;
}

li {
  text-align: left;
  margin: 4px 10px;
}
a {
  color: #42b983;
}
</style>
