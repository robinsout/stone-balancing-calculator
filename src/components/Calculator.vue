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
            v-model="days"
            class="calculator__inputs_input"
            :class="{error: !days}"
            type="number"
            placeholder="Количество дней"
          >
        </div>
        <div class="calculator__inputs__block">
          <h3 class="calculator__inputs__block-title">
            Сколько человек ждать, включая вас?
          </h3>
          <input
            id="persons"
            v-model="persons"
            class="calculator__inputs_input"
            :class="{error: !persons}"
            type="number"
            placeholder="Количество персон"
          >
        </div>
        <div class="calculator__inputs__block">
          <h3 class="calculator__inputs__block-title">
            Какие условия размещения вас устроят?
          </h3>
          <div>
            <select
              id="conditions"
              v-model="conditionsValue"
              class="calculator__inputs_input"
              :class="{error: !conditionsValue}"
            >
              <option
                :value="0"
                disabled
                selected
              >
                Выберите условия размещения
              </option>
              <option
                v-for="condition, index in conditions"
                :key="`condition.value-${index}`"
                :value="condition.value"
              >
                {{ condition.description }}
              </option>
            </select>
          </div>
        </div>
        <div class="calculator__inputs__block">
          <h3 class="calculator__inputs__block-title">
            Как вы готовы помочь проекту?
          </h3>
          <ul class="calculator__contribution-options-list">
            <li class="calculator__inputs__contribution-option">
              <label for="money">
                Деньгами,
                <input
                  v-model="money"
                  type="number"
                  placeholder="введите сумму"
                > евро.
              </label>
            </li>
            <li class="calculator__inputs__contribution-option">
              <label for="labour">
                Трудом, могу помогать
                <input
                  v-model="labourHours"
                  type="number"
                  placeholder="введите количество"
                >
                часов в день, а именно:
              </label>
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
            </li>
            <li class="calculator__inputs__contribution-option">
              <label>
                Культурой и искусством*:
              </label>
              <div class="calculator__inputs__contribution-option__list">
                <div class="calculator__inputs__contribution-option__culture-art__wrapper">
                  <div class="calculator__inputs__contribution-option__culture-art">
                    <select
                      id="artContribution"
                      v-model="activeArtContributionType"
                      class="calculator__inputs_input"
                      :class="{'error': !activeArtContributionType && !!artContributionValue}"
                    >
                      <option
                        :value="''"
                        disabled
                        selected
                      >
                        выберите вариант помощи
                      </option>
                      <option
                        v-for="contributionOption, index in artContributionOptions"
                        :key="`contributionOption-${index}`"
                        :value="contributionOption"
                      >
                        {{ contributionOption }}
                      </option>
                    </select>
                    на сумму <input
                      v-model="artContributionValue"
                      type="number"
                      placeholder="введите сумму"
                      :class="{'error': !!activeArtContributionType && !artContributionValue}"
                    > евро
                  </div>
                </div>
              </div>
              <p>
                <i>
                  * Мы включаем в расчет риски и расходы.
                  К примеру, вы называете рыночную стоимость произведения, скажем 300 евро.
                  Нет гарантии, что нам однажды удастся его продать. А в случае продажи нам
                  придется отдать часть суммы на налоги и понести расходы, связанные с хранением
                  и организацией продажи произведения. Поэтому произведение в 300 евро это 10 пьетр.  
                </i>
              </p>
              <div
                v-if="days && persons"
                class="calculator__inputs__block"
              >
                <h3
                  class="calculator__inputs__block-title"
                  :class="{error: isOkayWithDailyContribution === null}"
                >
                  Готовы ли вы наряду с остальными резидентами вносить наличными<br>по 20 евро в день на еду и другие неизбежные расходы?
                </h3>
                <div class="calculator__inputs__daily-contribution-option">
                  <input
                    id="acceptDailyContribution"
                    v-model="isOkayWithDailyContribution"
                    type="radio"
                    class="calculator__inputs__contribution-option__radio-button"
                    name="dailyContribution"
                    :value="true"
                  >
                  <label for="acceptDailyContribution">
                    Не проблема, внесу наличными в день приезда <strong>{{ 20*persons*days }} евро</strong> за весь период
                  </label>
                </div>
                <div class="calculator__inputs__daily-contribution-option">
                  <input
                    id="declineDailyContribution"
                    v-model="isOkayWithDailyContribution"
                    type="radio"
                    class="calculator__inputs__contribution-option__radio-button"
                    name="dailyContribution"
                    :value="false"
                  >
                  <label for="declineDailyContribution">
                    У меня финансовые трудности, предпочитаю компенсировать эту сумму трудом или творчеством 
                  </label>
                </div>
              </div>
            </li>
          </ul>
          <div
            class="calculator__inputs__block"
          >
            <div>
              <b>
                <label fpr="result">
                  Вот такой вот результат:
                </label>
                <p
                  v-if="!!getCalculationResult() && getCalculationResult() !== NaN && getCalculationResult() !== 'NaN' && isOkayWithDailyContribution !== null"
                  id="result"
                  :class="{
                    error: getCalculationResult() < 0,
                    green: getCalculationResult() >= 0
                  }"
                >
                  {{ Math.abs(getCalculationResult()) }}
                </p>
                <p
                  v-else
                  id="result"
                >Заполните обязательные поля</p>
              </b>
            </div>
            <p>
              <i>
                Если здесь меньше нуля — значит пьетр хватает, если больше — значит не хватает.<br>
                Потом сделаем правильную надпись, сейчас пока оставил так, чтобы ты смог проверить.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Calculator.js" />
<style scoped lang="scss" src="./Calculator.scss" />
