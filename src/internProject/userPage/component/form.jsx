import { useEffect, useState } from "react";
import axios from "axios";
export function FormPage() {
  const encodedParams = new URLSearchParams();
  encodedParams.set("id", "496243");
  encodedParams.set("type", "movie");
  encodedParams.set("country", "us");

  const options = {
    method: "POST",
    url: "https://gowatch.p.rapidapi.com/lookup/title/tmdb_id",
    params: {
      id: "496243",
      type: "movie",
      country: "us",
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "gowatch.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <div className="bg bg-zinc-200"></div>
    </>
  );
}
