import api from "./api";

const SchedulingService = {

  getById(schedulingId) {
    return api.get("/agendamento/" + schedulingId);
  },

  getAllByPatientId(patientId) {
    return api.get("/agendamento/paciente/" + patientId);
  },

  getAllByDoctorId(doctorId) {
    return api.get("/agendamento/medico/" + doctorId);
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