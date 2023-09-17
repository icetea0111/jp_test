"use server";
import { JobData } from "@/types";

export async function fetchJobList(page: number) {
  const perPage = 9;
  const apiUrl = `https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=${page}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const data_recruits = await data.data.recruits;
    return data_recruits as JobData[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}