import api from "./api";

const WithdrawService = {

  getAllByWalletId(walletId) {
    return api.get("/saque/" + walletId);
  },

  registerWithdraw(walletId, withdraw) {
    return api.post(`/saque/${walletId}`, withdraw);
  },

  deleteWithdraw(id) {
    return api.delete(`/saque/${id}`);
  }

}

export default WithdrawService;