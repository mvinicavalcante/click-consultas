import api from "./api";

const DepositService = {

  getAllByWalletId(walletId) {
    return api.get("/deposito/" + walletId);
  },

  registerDeposit(walletId, deposit) {
    return api.post(`/deposito/${walletId}`, deposit);
  },

  deleteDeposit(id) {
    return api.delete(`/deposito/${id}`);
  }

}

export default DepositService;