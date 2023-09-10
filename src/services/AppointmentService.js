import api from "./api";

const AppointmentService = {

  getAppointmentById(appointmentId) {
    return api.get("/consulta/" + appointmentId);
  },

};

export default AppointmentService;
