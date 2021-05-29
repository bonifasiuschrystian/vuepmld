import http from "../http-common";

class CartDataService {
  getAll() {
    return http.get("/cart");
  }

  get(id) {
    return http.get(`/cart/${id}`);
  }

  create(data) {
    return http.post("/cart", data);
  }

  update(id, data) {
    return http.put(`/cart/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cart/${id}`);
  }

  deleteAll() {
    return http.delete(`/cart`);
  }

  findByTitle(title) {
    return http.get(`/cart?name=${title}`);
  }
}

export default new CartDataService();