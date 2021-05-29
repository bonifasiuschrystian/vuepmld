import axios from "axios";
import crypto from "crypto";

const apiKey = "DEV-YKrs49GIYQ261gCIm5y9fwAE3Y7Qaijv0QfioGIWDEV-YKrs49GIYQ261gCIm5y9fwAE3Y7Qaijv0QfioGIW";
const privateKey = "O4YzH-sIc95-qrEeU-JxpR4-BjGtD";

function randomInvoice() {
    // TODO 
    // Buat kode untuk create random invoice
    Math.random().toString(36).substr(2, 9);
    return 'randomInvoice'
}

function randomCustomerName() {
    Math.random().toString(36).substring(2);
    return 'randomCustomerName'
}

function randomCustomerEmail() {
    Math.random().toString(36).substring(2) + '@gmail.com';
    return 'randomCustomerEmail'
}

function randomCustomerPhone() {
    '081' + Math.floor(Math.random() * 10) + 1;
    return 'randomCustomerPhone'
}

class PaymentService {
    static async createPayment({
        amount,
        order_items

    }) {
        const merchant_code = "T3742";
        const merchant_ref = randomInvoice();

        const expiry = parseInt(Math.floor(new Date() / 1000) + (24 * 60 * 60));

        const signature = crypto.createHmac('sha256', privateKey).update(merchant_code + merchant_ref + amount).digest('hex');

        const payload = {
            'method': 'BRIVA',
            'merchant_ref': merchant_ref,
            'amount': amount,
            'customer_name': randomCustomerName(),
            'customer_email': randomCustomerEmail(),
            'customer_phone': randomCustomerPhone(),
            'order_items': order_items,
            // 'order_items': [{
            //         'sku': 'PRODUK1',
            //         'name': 'Nama Produk 1',
            //         'price': 500000,
            //         'quantity': 1
            //     },
            //     {
            //         'sku': 'PRODUK2',
            //         'name': 'Nama Produk 2',
            //         'price': 500000,
            //         'quantity': 1
            //     }
            // ],
            'expired_time': expiry,
            'signature': signature
        }

        axios.post('https://payment.tripay.co.id/api/transaction/create', payload, {
                headers: {
                    'Authorization': 'Bearer ' + apiKey
                }
            })
            .then((res) => {
                console.log(res);
                return Promise.resolve(res.data);
            })
            .catch((error) => {
                console.error(error);
                return Promise.reject(error);
            });
    }
}

export default new PaymentService();