<template>
  <br />
  <br />
  <div class="signup">
    <h1>This is a signup page</h1>

    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <small id="passwordHelp" class="form-text text-muted">
            We'll never share your password with anyone else.
          </small>
          <br />
          <div class="form-group">
            <label for="exampleInputPassword2"> Confirm password</label>
            <input
              v-model="confirm_password"
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              placeholder=" Confirm password"
            />
          </div>
          <br />
          <button type="button" @click="signup" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>   

<script>
import { firebase } from "@/firebase";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(function () {
          console.log("Uspješna registracija");
        })
        .catch(function (error) {
          console.error("Pogreška u autentifikaciji");
        });
      console.log("Nastavak");
    },
  },
};
</script>


