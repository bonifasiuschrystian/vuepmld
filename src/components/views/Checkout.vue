<template>
<div>
        <h1>Shopping Cart using IoT</h1>
        <h3>Your trolly is here! </h3>
        <br><br>
  <div class="container mb-4">
    <div class="row">
      <div class="col-md-12">
        <div>
          <b-table striped hover :items="tableData" :fields="fields"></b-table>
            <strong><p align=right>Total Product: {{total_product}}    Total Price: {{total}}</p> </strong>
        </div>
      </div>
    </div>
          <span style="float: right">

            <div class="add">
              <button class="btn btn1" @click="deleteCart">Add Promo</button>
            </div>
        
            <div class="pay">
              <button class="btn2 btn3" @click="createPayment=true">Continue</button>
              <modal v-if="createPayment" @close="createPayment=false">
                <h3>Pay Now</h3>
                </modal>
            </div>
          </span>
  </div>

        <div class="social-media">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-whatsapp"></i></a>
          <a href="#" @click="TujuanInstagram()"><i class="fab fa-instagram"></i></a>
        </div>

        <div class="footer">
          <p style="color:DarkGreen" align="center">© Shopping Cart Application powered by PMLD 2021</p>
        </div>

        
</div>
</template>



<script>
// import CompanyDataService from "../../services/CompanyDataService";

  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        pagination: {
        default: 1
      },
        tableData: 
        [{
            
          }],
          title_search:''
      }
    },
//     methods: {
//     retrieveCompany() {
//       CompanyDataService.getAll()
//         .then(response => {
//           this.tableData = response.data;
//           console.log(response.data);
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },
//   },
//     mounted() {
//     this.retrieveCompany();
//   }
}
</script>

<style>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   color: white;
   text-align: center;
}
</style>