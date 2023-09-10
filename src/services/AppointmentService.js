import api from "./api";

const AppointmentService = {

  getAppointmentById(appointmentId) {
    return api.get("/consulta/" + appointmentId);
  },

  getAllByDoctorId(doctorId) {
    return api.get("/consulta/medico/" + doctorId);
  },

  getAllByPatientId(patientId) {
    return api.get("/consulta/paciente/" + patientId);
  },

  registerAppointment(appointment) {
    return api.post("/consulta", appointment);
  }

};

export default AppointmentService;
