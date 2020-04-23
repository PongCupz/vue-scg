<template>
  <div id="function1">
    <div class="container-fluid">
      <div class="row page-titles">
        <div class="col-md-6 col-8 align-self-center">
          <h3 class="text-themecolor m-b-0 m-t-0">Function 1</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane active" id="home" role="tabpanel">
                  <div class="card-body">
                      <div class="sl-item">
                      <form v-on:submit="submit">
                      <div class="form-group">
                      <label>Input String</label>
                        <textarea class="form-control" rows="5" v-model="str.input"></textarea>
                      </div>
                          <div class="form-group m-b-0">

                              <button
                                type="submit"
                                class="btn btn-success waves-effect waves-light m-r-10"
                              >Submit</button>

                          </div><br><br>
                      Result : {{ todosList}}
                      </form>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'function1',
  data () {
    return {
      str: {
        input: 'X Y 5 9 15 23 Z'
      },
      loading: true,
      todosList: ''
    }
  },
  methods: {
    submit (event) {
      event.preventDefault()
      var res = this.str.input.split(' ')
      axios
        .post(process.env.ROOT_API + '/doscg/isString', {
          data: res
        })
        .then(response => {
          this.todosList = response.data
        })
    }
  }
}
</script>

<style scoped></style>
