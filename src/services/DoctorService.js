import api from "./api";

const DoctorService = {

  login(data) {
    return api.post("/medico/login", data);
  },

  getById(id) {
    return api.get("/medico/" + id);
  },

  registerDoctor(doctor) {
    return api.post("/medico", doctor);
  },

  patchDoctor(id, doctor) {
    return api.patch("/medico" + id, doctor);
  },

  getAllCRMByDoctorId(doctorId) {
    return api.get(`/medico/${doctorId}/crm`);
  },

  registerCRM(doctorId, crm) {
    return api.post(`/medico/${doctorId}/crm`, crm);
  },

  deleteCRM(doctorId, crmId) {
    return api.delete(`/medico/${doctorId}/crm/${crmId}`);
  },

  getAllSpecialtysByDoctorId(doctorId) {
    return api.get(`/medico/${doctorId}/especialidade`);
  },

  registerSpecialty(doctorId, specialty) {
    return api.post(`/medico/${doctorId}/especialidade`, specialty);
  },

  deleteSpecialty(doctorId, specialtyId) {
    return api.delete(`/medico/${doctorId}/especialidade/${specialtyId}`);
  }

}

export default DoctorService;