import api from "./api";

const SchedulingService = {

  getById(schedulingId) {
    return api.get("/agendamento/" + schedulingId);
  },

  getAllByPatientId(schedulingId) {
    return api.get("/agendamento/paciente/" + schedulingId);
  },

  registerScheduling(scheduling) {
    return api.post("/agendamento", scheduling);
  },

  deleteScheduling(schedulingId) {
    return api.delete("/agendamento/" + schedulingId);
  },

  checkHealtyPlanInSchedule(patientId, scheduleId) {
    return api.post(`/agendamento/planos/${patientId}/${scheduleId}`);
  }

}

export default SchedulingService;