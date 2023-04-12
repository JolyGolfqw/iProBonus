import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCESS_KEY, APIRoute } from "../api";

export const createAuth = createAsyncThunk(
  "createAuth",
  async (DefaultAuthData, thunkAPI) => {
    try {
      const res = await fetch(APIRoute.Login, {
        method: "POST",
        headers: { "Content-Type": "application/json", AccessKey: ACCESS_KEY },
        body: JSON.stringify({
          idClient: DefaultAuthData.idClient,
          accessToken: DefaultAuthData.accessToken,
          paramName: DefaultAuthData.paramName,
          paramValue: DefaultAuthData.paramValue,
          latitude: DefaultAuthData.latitude,
          longitude: DefaultAuthData.longitude,
          sourceQuery: DefaultAuthData.sourceQuery,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Ошибка авторизации: ${error.message}`);
    }
  }
);

export const getBonus = createAsyncThunk(
  "getBonus",
  async (token, thunkAPI) => {
    try {
      const res = await fetch(`${APIRoute.IBonus}/${token}`, {
        method: "GET",
        headers: { AccessKey: ACCESS_KEY },
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Ошибка при загрузке бонусов: ${error.message}`);
    }
  }
);
