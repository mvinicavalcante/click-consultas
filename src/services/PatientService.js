import api from "./api";

const PatientService = {
  
  getById(id) {
    return api.get("/paciente/" + id);
  },

  registerPatient(patient) {
    return api.post("/paciente", patient);
  },

  patchPatient(id, patient) {
    return api.patch("/paciente" + id, patient);
  },

  registerHealthPlan(patientId, plan) {
    return api.post(`/paciente/${patientId}/plano`, plan);
  }

}

export default PatientService;