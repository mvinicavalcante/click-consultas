import api from "./api";

const PatientService = {
  
  login(data) {
    return api.post("/paciente/login", data);
  },

  getById(id) {
    return api.get("/paciente/" + id);
  },

  registerPatient(patient) {
    return api.post("/paciente", patient);
  },

  patchPatient(id, patient) {
    return api.patch("/paciente/" + id, patient);
  },

  registerHealthPlan(patientId, plan) {
    return api.post(`/paciente/${patientId}/plano`, plan);
  },

  registerReview(avaliacao, patientId, doctorId){
    return api.post(`/avaliacao/${patientId}/${doctorId}`, avaliacao);
  }
  
}

export default PatientService;