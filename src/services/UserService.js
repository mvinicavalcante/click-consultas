import api from "./api";

const UserService = {

  getById(id) {
    return api.get("/usuario/" + id);
  },

  patchPassword(id, password) {
    return api.patch(`/usuario/${id}/senha`, password);
  },

  getWalletById(id) {
    return api.get(`/usuario/${id}/carteira`);
  },

  patchWallet(id) {
    return api.patch(`/usuario/${id}/carteira`);
  },

  getAllPixByUserId(userId) {
    return api.get(`/usuario/${userId}/pix`);
  },

  getPixById(userId, pixId) {
    return api.get(`/usuario/${userId}/pix/${pixId}`);
  },

  registerPix(userId, pix) {
    return api.post(`/usuario/${userId}/pix`, pix);
  },

  deletePix(userId, pixId) {
    return api.delete(`/usuario/${userId}/pix/${pixId}`);
  },

  patchPasswordByEmail(userEmail, password){
    return api.patch(`/usuario/email/${userEmail}/senha`, password);
  }

}

export default UserService;