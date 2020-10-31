<template>
  <footer id="footer" :class="darkMode ? 'dark-mode' : ''">
    <img src="../assets/images/logo.png" />
    <p class="location">{{ location }}</p>
    <p class="contact">{{ phoneNumber }} | {{ email }}</p>
    <div class="social-media">
      <span class="icon facebook" @click="alertNoSocialImplemented()"
        ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
      </span>
      <span class="icon tripadvisor" @click="alertNoSocialImplemented()">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'tripadvisor' }" />
      </span>
      <a target="_blank" :href="githubRepoUrl" class="icon github">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />
      </a>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  data: function () {
    return {
      githubRepoUrl:
        "https://github.com/dario-piotrowicz/VueJS2-SCSS_demo_pizzeria_restaurant_website_miniproject",
    };
  },
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
  computed: {
    ...mapState(["darkMode", "location", "phoneNumber", "email"]),
  },
  methods: {
    alertNoSocialImplemented: () => {
      alert(
        "This is not a real restaurant, obviously it does not have social media"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/constants.scss";

#footer {
  background-color: #fff;
  box-shadow: 0px 6px 20px 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;

  &.dark-mode {
    background-color: $dark-mode--neutral-background;
    box-shadow: 0px 6px 20px 3px $dark-mode--color-primary;
    color: $dark-mode--color-primary;

    .social-media {
      display: flex;

      & > .icon {
        color: #000;

        &.facebook {
          background-color: #3b5998;
        }
        &.tripadvisor {
          background-color: #00af87;
        }
        &.github {
          background-color: #797979;
        }

        &:hover {
          color: #fff;
        }
      }
    }
  }
}

img {
  width: 15rem;
}

p {
  &.location {
    margin-bottom: 0.25rem;
  }
  &.contact {
    margin-top: 0.25rem;
    margin-bottom: 1.2rem;
  }
}

.social-media {
  display: flex;

  & > .icon {
    font-size: 1.2rem;
    color: #fff;
    width: 2rem;
    height: 2rem;
    margin: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.5s, color 1s;

    &.facebook {
      background-color: #3b5998;
    }
    &.tripadvisor {
      background-color: #00af87;
    }
    &.github {
      background-color: #333;
    }

    &:hover {
      transform: scale(1.2);
      color: #000;
    }
  }
}
</style>
