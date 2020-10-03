<template>
  <footer id="footer">
    <img src="../assets/images/logo.png" />
    <p class="location">Pizzas Rd, Somewhere , 12 - P1ZZ4 United Kingdom</p>
    <p class="contact">+12 3456 7891011 | dariospizzas@fakeemail.com</p>
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
#footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
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
      color: black;
    }
  }
}
</style>
