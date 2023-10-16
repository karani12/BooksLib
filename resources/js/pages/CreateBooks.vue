<template>
    <div>
      <h2 class="h2">Add Book</h2>
      <form @submit.prevent="submitBook">
        <div class="container">
          <label for="title">title:</label>
          <input class="input" type="text" id="title" v-model="item.title" required
           />
        </div>
        <div class="container">
          <label for="tag_id">tag_id</label>
          <input  class="input" id="tag_id" v-model="item.tag_id" required type="number"/>
        </div>
        <div class="container">
          <label for="author_id">author_id</label>
          <input  class="input" id="author_id" v-model="item.author_id" type="number">
        </div>
        <div class="container">
          <label for="author_id">publication_year</label>
          <input  class="input" id="publication_year" v-model="item.publication_year" type="number">
        </div>
        <button type="submit" class="btn bg-black text-white">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
import { ref } from "vue";
  
  export default {
    setup() {
      const item = ref({
        title: "",
        tag_id: "",
        author_id: "",
        publication_year: "",
      });
  
      const submitBook = async () => {
        try {
          const response = await axios.post("/api/books", {
            method: "POST",
        //   send json
            body: JSON.stringify({
              title: item.value.title,
              tag_id: item.value.tag_id,
              author_id: item.value.author_id,
              publication_year: item.value.publication_year,
            }),
          }).then((response) => {
            console.log(response);
          });
  
          if (response.ok) {
            console.log("Item posted successfully");
          } else {
            console.error("Error posting item");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      return {
        item,
        submitBook,
      };
    },
  };
  </script>

<style>
.input{
    border: #000000 1px solid;
    height: 40px;
    width: 50%;
    margin-top: 10px;
}
.container{
    flex-direction: column;
    display: flex;
    width : "50%"
}
.btn{
    color: white;
    background-color: #000000;
    height: 40px;
    padding: 0 10px;
    margin-top: 20px;
}
.h2{
    margin: 10px 10px;
    font-weight: bold;
    font-size: x-large;

}

form{
    margin: 20px 10px;
}
</style>
  