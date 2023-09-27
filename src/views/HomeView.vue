<template>
  <br />
  <br />
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <form @submit.prevent="postNewImage" class="form-inline mb-5">
        <div class="form-group">
          <label for="imageUrl">Image URL</label>
          <input
            v-model="newImageUrl"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image URL"
            id="imageUrl"
          />
        </div>
        <br />
        <div class="form-group">
          <label for="imageDescription">Description</label>
          <input
            v-model="newImageDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image description"
            id="imageDescription"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary ml-2">Post image</button>
      </form>
      <instagram-card v-for="card in cards" :key="card" :info="card" />
      <instagram-card />
    </div>
    <div class="col-3">Sidebar {{ store.searchTerm }}</div>
  </div>
  <div class="sticky-top">...</div>
</template>

<script>
import InstagramCard from "@/components/InstagramCard.vue";

import store from "@/store.js";

import { db } from "@/firebase";

let cards = [];

cards = [
  "https://picsum.photos/id/1/800",
  "https://picsum.photos/id/2/800",
  "https://picsum.photos/id/3/800",
  "https://picsum.photos/id/4/800",
  "https://picsum.photos/id/5/800",
  "https://picsum.photos/id/6/800",
  "https://picsum.photos/id/7/800",
];

export default {
  name: "HomeView",
  components: {
    InstagramCard,
  },
  computed: {
    filterCards() {
      return [cards[1]];
    },
  },
  data: function () {
    return {
      cards,
      store,
      newImageDescription: "",
      newImageUrl: "",
    };
  },
  methods: {
    postNewImage() {
      console.log("OK");

      const imageUrl = this.newImageUrl;

      const imageDescription = this.newImageDescription;

      db.collection("posts")
        .add({
          url: imageUrl,
          desc: imageDescription,
          email: store.currentUser,
          posted_ad: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newImageDescription = "";
          this.newImageUrl = "";
        })
        .catch((error) => {
          console.error("Greška", error);
        });
    },
  },
};
</script>   

<style>
.jumbotron {
  background-color: rgb(174, 236, 236);
}

.sticky-top {
  background-color: rgb(239, 223, 246);
  height: 40px;
  padding: 30px;
}
</style>
