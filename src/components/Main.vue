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
import CartDataService from "../services/CartDataService";
import PaymentService from "../services/PaymentService";

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
      },fields:['product_id','name','quantity','price'],
        tableData: 
        [{
            
          }],
          title_search:'',
        myModel:false
      }
    },
    methods: {
    myFunction: function() {
      // window.open('https://payment.tripay.co.id/api/transaction/create', "_blank");
      // window.open("data.checkout_url", "_blank");
      window.open("https://payment.tripay.co.id/checkout/T0001000000000000006", "_blank");
    },
    TujuanInstagram: function() {
      window.open('www.instagram.com', "_blank");
    },
    retrieveCart() {
      CartDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
     deleteCart() {
      CartDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          // this.$router.push({ name: "topics" });
        })
        .catch(e => {
          console.log(e);
        });
    },
      createPayment() {
        PaymentService.createPayment({
          amount: this.total,
          order_items:  [{
                    'product_id': this.fields.product_id,
                    'name': this.fields.name,
                    'price': this.fields.price,
                    'quantity': this.fields.quantity
                },
                {
                    'product_id': this.fields.product_id,
                    'name': this.fields.name,
                    'price': this.fields.price,
                    'quantity': this.fields.total_product
                }
            ],
        }).then(data => { 
          console.log(data)
          // redirect ke halaman pembayaran tripay
          // cari: vue router redirect
          // this.$router.push('data.checkout_url')
          // window.location.href = data.checkout_url;

        }).catch(err => {
          console.log('err', err);
        })
      },
  },
    mounted() {
    this.retrieveCart();
    this.timer = setInterval(this.retrieveCart,200)
  },
  computed: {
  total: function(){
    console.log(this.tableData);
    return this.tableData.reduce(function(total, item){
      return total + item.price; 
    },0);
  },
  total_product: function(){
    console.log(this.tableData);
    return this.tableData.reduce(function(total_product, item){
      return total_product + item.quantity; 
    },0);
  },
}
}
</script>

<style>
body {
  background-color: #e3edf7;
}
h1 {
  color: #3577ba;
  font-family: sans-serif;
  font-size: 20px;
}

.add {
  padding: 15px 5px;
  float: right;
}

.btn {
  border: 0.1px solid;
  background: none;
  padding: 10px 20px;
  font-family: sans-serif;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
  transition: 0.8ms;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.15),
    -3px -3px 5px -1px rgba( 255, 255, 255, 0.7);
}

.btn::before{
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 0%;
  background: #90949c;
  z-index: -1;
  transition: 0.8ms;
}

.btn1 {
  color: #90949c;
}

.btn1::before, .btn3::before {
  top: 0;
  border-radius: 0 0 50% 50%;
}

.btn1:hover, .btn3:hover {
  color: whitesmoke;
  box-shadow: inset 2px 2px 3px -1px rgba(0, 0, 0, 0.2), 
    inset -2px -2px 3px -1px rgba( 255, 255, 255, 0.7),
    -0.25px -0.25px 0px rgba( 255, 255, 255, 1),
    0.25px 0.25px 0px rgba(0, 0, 0, 0.15),
    0px 6px 5px -5px rgba( 255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.btn1:hover::before, .btn3:hover::before {
  height: 180%;
}

.pay {
  padding: 15px 5px;
  float: right;
}

.btn2 {
  border: 1px solid #46cb18;
  background: none;
  padding: 10px 20px;
  font-family: sans-serif;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
  transition: 0.8ms;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.15),
    -3px -3px 5px -1px rgba( 255, 255, 255, 0.7);
}

.btn2::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 0%;
  background: #46cb18;
  z-index: -1;
  transition: 0.8ms;
}

.btn3 {
  color: #46cb18;
}

/* script buat footer */

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   color: white;
   text-align: center;
   font-size: 12px;
   font-family: sans-serif;
}

.social-media {
  display: flex;
  justify-content: center;
  padding-top: 550px ;
}

a {
  display: flex;
  background-color: #e3edf7;
  width: 32px;
  height: 32px;
  margin: 0 15px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.15),
    -3px -3px 5px -1px rgba( 255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0);
  transition: transfor 0.5s;
}

a i {
  font-size: 12px;
  color: #777;
  transition: transform 0.5s;
}

a:hover {
  box-shadow: inset 2px 2px 3px -1px rgba(0, 0, 0, 0.2), 
    inset -2px -2px 3px -1px rgba( 255, 255, 255, 0.7),
    -0.25px -0.25px 0px rgba( 255, 255, 255, 1),
    0.25px 0.25px 0px rgba(0, 0, 0, 0.15),
    0px 6px 5px -5px rgba( 255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transform: translateY(1px);
}

a:hover i {
  transform: scale(0.9);
}

a:hover .fa-facebook {
  color: #3b5698;
}

a:hover .fa-twitter {
  color: #00acee;
}

a:hover .fa-whatsapp {
  color: #4fce5d;
}

a:hover .fa-instagram {
  color: #c32aa3;
}

</style>