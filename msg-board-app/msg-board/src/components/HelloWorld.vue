<template>
  <div class="messages-container">
    <h2>Leave a Message will ya?</h2>
    <form @submit.prevent="addMessage" id="new-message-form" class="new-message-form">
      <!-- Error -->
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="bottom" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Error!</h4>
        <p>{{error}}</p>
      </div>

      <!-- Username -->
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="message.username"
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
          required
        />
      </div>

      <!-- Subject -->
      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          v-model="message.subject"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Subject"
          required
        />
      </div>

      <!-- Message -->
      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="message.message" class="form-control" id="message" placeholder="Message"></textarea>
      </div>

      <!-- Image URL -->
      <div class="form-group">
        <label for="imageURL">Image URL</label>
        <input v-model="message.imageURL" type="text" class="form-control" id="imageURL" />
      </div>

      <!-- Submit Button -->
      <button type="submit" id="submit-message">Add Message</button>
    </form>

    <div v-for="message in reversedMessages" :key="message._id" class="media-container">
      <li class="media">
        <div class="media-profile">
          <img v-if="message.imageURL" :src="message.imageURL" alt="avatar" />
          <h4 class="m-username">{{message.username}}</h4>
        </div>
        <div class="media-body">
          <div class="m-post-date">
            <p class="m-date">{{message.date}}</p>
            <p class="m-time">{{message.time}}</p>
          </div>
          <h4 class="m-subject">{{message.subject}}</h4>
          <p class="m-message">{{message.message}}</p>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
const API_URL = "https://stefanbobrowski.com/mbapi";
//const API_URL = "http://localhost:4000/";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    error: "",
    messages: [],
    message: {
      username: "",
      subject: "",
      message: "",
      imageURL: "https://source.unsplash.com/random/100x100"
    }
  }),

  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    }
  },

  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.messages = result;
      });
  },

  methods: {
    addMessage() {
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.message),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map(detail => detail.message)
              .join(". ");
            this.error = error;
          } else {
            this.error = "";
            this.showMessageForm = false;
            this.messages.push(result);
          }
        })
        .then(() => {
          document.getElementById("new-message-form").reset();
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messages-container {
  padding: 10px;
}

.messages-container h2 {
  margin: 20px 0px 30px 0px;
  font-size: 30px;
  line-height: 34px;
}

.new-message-form {
  margin: 0 auto 40px auto;
}

.form-group {
  width: 100%;
  max-width: 340px;
  position: relative;
  margin: 10px auto;
}

.form-group label {
  width: 100%;
  max-width: 100px;
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  right: 100%;
  top: 5px;
  text-align: right;
  padding-right: 10px;
  text-transform: uppercase;
}

.form-group input {
  width: 100%;
  max-width: 340px;
  padding: 10px;
}

.form-group textarea {
  display: block;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  max-width: 340px;
  height: 120px;
  padding: 10px;
  resize: none;
}

.submit-message {
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}

.media-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.media {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  list-style-type: none;
}

.media-profile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  max-width: 200px;
  min-width: 150px;
  padding: 20px 5px;
  border-right: 2px solid #fff;
  background-color: #2c3e50;
}

.media-profile img {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
}

.m-username {
  font-size: 17px;
  font-weight: normal;
  color: #fff;
}

.media-body {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  text-align: left;
  background-color: #2c3e50;
}

.m-post-date {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: tomato;
}

.m-subject {
  word-break: break-all;
  margin-bottom: 15px;
  font-size: 28px;
  color: #42b983;
}

.m-message {
  margin-bottom: 10px;
  margin-left: 1px;
  font-size: 15px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.8);
}

@media screen and (max-width: 550px) {
  .form-group label {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .messages-container h2 {
    font-size: 26px;
    line-height: 30px;
  }

  .form-group label {
    font-size: 12px;
  }

  .media-profile {
    min-width: 100px;
  }

  .media-profile img {
    width: 70px;
    height: 70px;
  }

  .m-username {
    font-size: 14px;
    word-break: break-all;
  }

  .m-post-date {
    font-size: 12px;
  }
  .m-subject {
    font-size: 22px;
  }

  .m-message {
    font-size: 14px;
  }
}

@media screen and (max-width: 400px) {
  .messages-container h2 {
    font-size: 22px;
    line-height: 26px;
  }
}
</style>
