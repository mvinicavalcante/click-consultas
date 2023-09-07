import api from "./api";

const ScheduleService = {

  getById(id) {
    return api.get("/agenda/" + id);
  },

  getAllByDoctorId(doctorId) {
    return api.get("/agenda/medico/" + doctorId);
  },

  registerSchedule(doctorId, schedule) {
    return api.post("/agenda/" + doctorId, schedule);
  },

  patchSchedule(scheduleId, schedule) {
    return api.patch("/agenda/" + scheduleId, schedule);
  },

  deleteSchedule(scheduleId) {
    return api.delete("/agenda/" + scheduleId);
  }

}

export default ScheduleService;