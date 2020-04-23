<template>
  <div id="function2">
    <div class="container-fluid">
      <div class="row page-titles">
        <div class="col-md-6 col-8 align-self-center">
          <h3 class="text-themecolor m-b-0 m-t-0">Function 2</h3>
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
                        <div class="form-group row">
                          <label>Input Number</label>
                        </div>
                        <div class="form-group row">
                          <label>A</label>
                          <input type="number" class="form-control" v-model="val.A" />
                        </div>
                        <div class="form-group row">
                          <label>A + B</label>
                          <input type="number" class="form-control" v-model="val.AB" />
                        </div>
                        <div class="form-group row">
                          <label>A + C</label>
                          <input type="number" class="form-control" v-model="val.AC" />
                        </div>
                        <div class="form-group m-b-0">
                          <button
                            type="submit"
                            class="btn btn-success waves-effect waves-light m-r-10"
                          >Submit</button>
                        </div>
                        <br />
                        <br />
                        Result {{todosList}}
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
      val: {
        A: 21,
        AB: 23,
        AC: -21
      },
      loading: true,
      todosList: ''
    }
  },
  methods: {
    submit (event) {
      event.preventDefault()
      axios
        .post(process.env.ROOT_API + '/doscg/calculate', {
          data: this.val
        })
        .then(response => {
          this.todosList =
            '#A : ' +
            response.data.A +
            ' #B : ' +
            response.data.B +
            ' #C : ' +
            response.data.C
        })
    }
  }
}
</script>

<style scoped></style>
