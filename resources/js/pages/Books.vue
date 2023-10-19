<template>
    <div class="px-40" @click="toggleModal">
        <button class="btn btn-primary">Add Book</button>
    </div>

    <dialog id="my_modal_1" ref="modal" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Add a Book</h3>
            <div className=" w-full">
                <form @submit.prevent="submitBook" ref="formRef" class="w-full">
                    <div class="input-cont">
                        <label for="title" class="mt-3">Title</label>
                        <input type="text" placeholder="" name="title" v-model="item.title"
                            class="w-full mt-3  border rounded-md h-10 bg-transparent px-3" />
                    </div>
                    <div class="input-cont mt-3">
                        <div class="form-control ">
                            <label for="author_id" class="label">
                                <span class="label-text">Author</span>
                            </label>
                            <select name="author_id" class="select select-bordered" v-model="item.author_id" required>
                                <option disabled selected>Pick one</option>
                                <option value="1">David Baldacci</option>
                                <option value="2">John Grisham</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-cont mt-3">
                        <div class="form-control ">
                            <label for="tag_id" class="label">
                                <span class="label-text">Tag</span>
                            </label>
                            <select name="tag_id" v-model="item.tag_id" class="select select-bordered" required>
                                <option disabled selected>Pick one</option>
                                <option value="1">Horror</option>
                                <option value="2">Drama</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-cont mt-3">
                        <label for="publication_year" class="mt-3">Publication year</label>
                        <input type="number" v-model="item.publication_year" maxlength="4" required placeholder=""
                            name="publication-year"
                            class="w-full mt-3  border rounded-md h-10 bg-transparent px-3" />
                    </div>

                    <div class="cont-btns flex gap-4 mt-3">

                        <button  className="btn btn-primary">Add Book</button>
                        <form method="dialog">
                            <button className="btn btn-outline">Close</button>
                        </form>

                    </div>
                </form>
            </div>
        </div>
    </dialog>



    <div class="overflow-x-auto px-40 m-auto">
        <div v-if="books.length === 0">
            No books 
        </div>
       
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Tag</th>
                    <th>Publication Year</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books">
                    <th>{{ book.title }}</th>
                    <td>{{ book.author.name }}</td>
                    <td>{{ book.tags[0].name }}</td>
                    <td>{{ book.publication_year }}</td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup>

import axios from "axios";
import { ref } from 'vue';
import useBooks from '../composables/useBooks';
import { useBooksStore } from "../store/books";

const { books, error, loading } = useBooks()
const store = useBooksStore()
const formRef = ref(null)


const toggleModal = () => {
    const modal = document.getElementById('my_modal_1')
    modal.showModal()
}


const item = ref({
    title: "",
    tag_id: "",
    author_id: "",
    publication_year: "",
});

const submitBook = async () => {
    try {
        const response = await axios.post("/api/books", {
            title: item.value.title,
            author_id: item.value.author_id,
            publication_year: item.value.publication_year,
            tag_id: item.value.tag_id,
        });

        if (response.status === 200) {
            item.value.author_id = "",
            item.value.publication_year = "",
            item.value.tag_id = "",
            item.value.title = ""
            store.books.push(response.data)
        } else {
            console.error("Error posting item");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};





</script>

<style></style>