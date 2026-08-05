import axiosClient from "./axiosClient";

export async function fetchDashboardStats() {
  const res = await axiosClient.get("/dashboard");
  return res.data;
}
