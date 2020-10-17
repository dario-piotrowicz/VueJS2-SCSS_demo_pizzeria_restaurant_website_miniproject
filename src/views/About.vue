<template>
  <div class="page" id="about">
    <div class="centering-container title-container">
      <h1 class="page-title">About</h1>
    </div>
    <div class="full-width-wrapper">
      <div class="basic-info-container centering-container">
        <div class="contact-info-container">
          <contact-info
            v-for="cInfo of contactInfos"
            :key="`${cInfo.icon}-${cInfo.info}`"
            :icon="cInfo.icon"
            :info="cInfo.info"
          />
        </div>
        <div class="opening-times-container">
          <h2 class="opening-times">Opening Times</h2>
          <div
            v-for="opTime of openingTimesInfo"
            :key="opTime.dayOfWeek"
            class="times-info"
          >
            <div class="day-of-week">{{ opTime.dayOfWeek }}:</div>
            <div v-if="opTime.info" class="times">{{ opTime.info }}</div>
            <div v-else class="closed">Closed</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactInfo from "../components/ContactInfo";

export default {
  data: function () {
    return {
      contactInfos: [
        {
          icon: "home",
          info: "Pizzas Rd, Somewhere , 12 - P1ZZ4 United Kingdom",
        },
        { icon: "phone-alt", info: "+12 3456 7891011" },
        { icon: "at", info: "dariospizzas@fakeemail.com" },
      ],
      openingTimesInfo: [
        {
          dayOfWeek: "Monday",
          info: "11:00 - 16:00, 19:00 - 23:30",
        },
        {
          dayOfWeek: "Tuesday",
          info: "",
        },
        {
          dayOfWeek: "Wednesday",
          info: "11:00 - 16:00, 19:00 - 23:30",
        },
        {
          dayOfWeek: "Thursday",
          info: "11:00 - 16:00, 19:00 - 23:30",
        },
        {
          dayOfWeek: "Friday",
          info: "11:00 - 16:00, 19:00 - 23:30",
        },
        {
          dayOfWeek: "Saturday",
          info: "11:00 - 16:00, 19:00 - 23:30",
        },
        {
          dayOfWeek: "Sunday",
          info: "11:00 - 16:00, 19:00 - 23:30",
        },
      ],
    };
  },
  components: {
    "contact-info": ContactInfo,
  },
};
</script>>

<style lang="scss" scoped>
.full-width-wrapper {
  background-color: #fff;
  padding: 2rem;
  margin: 2rem 0;

  .basic-info-container {
    display: flex;
    justify-content: space-around;

    .contact-info-container,
    .opening-times-container {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-basis: 30%;
    }
  }
}

.times-info {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  .day-of-week {
    font-weight: bolder;
  }

  .times,
  .closed {
    width: 11rem;
    margin-left: 1rem;
  }

  .times {
    text-align: end;
  }

  .closed {
    text-align: center;
  }
}

.contact-info {
  .info {
    padding: 2rem;
    border: 1px solid blue;
  }
}
</style>