import api from "./api";

const UserService = {

  getById(id) {
    return api.get("/usuario/" + id);
  },

  patchPassword(id, password) {
    return api.patch(`/usuario/${id}/senha`, password);
  }

}

export default UserService;