import api from "./api";

const DoctorService = {
  
  getById(id) {
    return api.get("/medico/" + id);
  },

  registerDoctor(doctor) {
    return api.post("/medico", doctor);
  },

  patchDoctor(id, doctor) {
    return api.patch("/medico" + id, doctor);
  }

}

export default DoctorService;