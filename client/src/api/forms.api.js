import axiosClient from "./axiosClient";

export async function submitContactForm(formData) {
  const res = await axiosClient.post("/api/Form/contact", formData);
  return res.data;
}

export async function submitEnquiryForm(formData) {
  const res = await axiosClient.post("/api/Form/enquiry", {
    ...formData,
    type: "POPUP_ENQUIRY",
  });
  return res.data;
}

export async function submitCareerApplication(payload) {
  const res = await axiosClient.post("/api/Form/career", payload);
  return res.data;
}
