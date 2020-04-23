<template>
  <div id="linebot">
    <div class="container-fluid">
      <div class="row page-titles">
        <div class="col-md-6 col-8 align-self-center">
          <h3 class="text-themecolor m-b-0 m-t-0">Line Bot</h3>
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
                      <div class="form-group">
                        <div class="error-body text-center">
                          <img src="../assets/images/qr.png" class="img-fluid" />
                          <h3 class="text-uppercase">Add ME </h3>
                          <p class="text-muted m-t-30 m-b-30">Try send me "สวัสดี". If my bot can't answer will show in report below</p>
                        </div>
                      </div>
                      <h4 class="card-title">No Answer Report</h4>
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>Date Receive</th>
                              <th>Message</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="line in line_data" :key="line.id">
                              <td>{{line.receive_date}}</td>
                              <td>{{line.message}}</td>
                            </tr>
                          </tbody>
                        </table>
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'linebot',
  data () {
    return {
      line_data: []
    }
  },
  mounted () {
    this.loadData()
    setInterval(
      function () {
        this.loadData()
      }.bind(this),
      10000
    )
  },
  methods: {
    loadData () {
      axios.get(process.env.ROOT_API + '/line/linenoti').then(response => {
        this.line_data = response.data
      })
    }
  }
}
</script>

<style scoped></style>
