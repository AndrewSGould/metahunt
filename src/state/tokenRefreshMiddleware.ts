import { Middleware } from '@reduxjs/toolkit';
import { logout, setToken } from './userSlice';

const tokenRefreshMiddleware: Middleware =
  (storeApi) => (next) => async (action) => {
    const { dispatch, getState } = storeApi;
    try {
      return await next(action);
    } catch (error: any) {
      if (error.status === 401) {
        const refreshResponse = await fetch(
          `${process.env.REACT_APP_BASE_API_URL}/v2/token/refresh`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${getState().user.refreshToken}`,
            },
          }
        );
        if (refreshResponse.ok) {
          const { token } = await refreshResponse.json();
          dispatch(setToken(token));
          const originalAction: any = action;
          originalAction.meta.retry = true;
          return dispatch(originalAction);
        } else {
          dispatch(logout());
          window.location.href = '/';
        }
      }
      throw error;
    }
  };

export default tokenRefreshMiddleware;
