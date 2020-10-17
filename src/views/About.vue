<template>
  <div class="page" id="about">
    <div class="centering-container title-container">
      <h1 class="page-title">About</h1>
    </div>
    <div class="full-width-wrapper">
      <div class="basic-info-container centering-container">
        <div class="contact-info-container">
          <contact-info icon="home" info="address" />
          <contact-info icon="phone-alt" info="phone number" />
          <contact-info icon="at" info="email addr" />
        </div>
        <div class="opening-times-container">
          <h2 class="opening-times">Opening Times</h2>
          <div class="times-info">
            <div class="day-of-week">Monday:</div>
            <div class="times">11:00 - 16:00, 19:00 - 23:30</div>
          </div>
          <div class="times-info">
            <div class="day-of-week">Tuesday:</div>
            <div class="closed">Closed</div>
          </div>
          <div class="times-info">
            <div class="day-of-week">Wednesday:</div>
            <div class="times">11:00 - 16:00, 19:00 - 23:30</div>
          </div>
          <div class="times-info">
            <div class="day-of-week">Thursday:</div>
            <div class="times">11:00 - 16:00, 19:00 - 23:30</div>
          </div>
          <div class="times-info">
            <div class="day-of-week">Friday:</div>
            <div class="times">11:00 - 16:00, 19:00 - 23:30</div>
          </div>
          <div class="times-info">
            <div class="day-of-week">Saturday:</div>
            <div class="times">11:00 - 16:00, 19:00 - 23:30</div>
          </div>
          <div class="times-info">
            <div class="day-of-week">Sunday:</div>
            <div class="times">11:00 - 16:00, 19:00 - 23:30</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactInfo from "../components/ContactInfo";

export default {
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
      border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
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