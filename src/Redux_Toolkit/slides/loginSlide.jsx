import { apiGetUser } from '../../services/User/User';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: sessionStorage.getItem('accessToken') || null,
    refreshToken: sessionStorage.getItem('refreshToken') || null,
    loading: false,
    error: null,
};

export const axiosLogin = createAsyncThunk('logins/loginUser', async (data, { rejectWithValue }) => {
    try {
        const response = await apiGetUser(data);

        if (response.data.code === 400) {
            return response.data.message;
        }
        return response.data;
    } catch (err) {
        console.log('>>> Error fetching login: ', err);
    }
});

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(axiosLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(axiosLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.accessToken = action.payload?.accessToken;
                state.refreshToken = action.payload?.refreshToken;

                if (action?.payload?.accessToken && action?.payload?.refreshToken) {
                    sessionStorage.setItem('accessToken', action?.payload?.accessToken);
                    sessionStorage.setItem('refreshToken', action?.payload?.refreshToken);
                } else {
                    state.error = action.payload;
                    console.log('error:', action.payload);
                }
            })
            .addCase(axiosLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Có 1 vài lỗi đang xảy ra';
            });
    },
});

export default loginSlice.reducer;
