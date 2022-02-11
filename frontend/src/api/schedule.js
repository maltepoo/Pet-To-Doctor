import { apiInstance } from "./index.js";

const api = apiInstance();

//의사 스케줄 정보 반환
async function getSchedule(id) {
  return (await api.get(`/schedule/${id}`)).data.data;
}

//의사 스케줄 정보 업데이트
async function updateSchedule(doctor) {
  return await api.post(`/schedule/${doctor.id}`, JSON.stringify(doctor));
}

export { getSchedule, updateSchedule };
