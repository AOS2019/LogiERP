// features/analytics/analyticsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface KPIData {
  deliveryTime: number;
  vehicleUsage: number;
  revenue: number;
  // Extend with other KPIs as needed
}

export interface AnalyticsState {
  kpiData: KPIData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Async thunk to fetch KPI data from a backend API endpoint
export const fetchKPIData = createAsyncThunk('analytics/fetchKPIData', async () => {
  // Replace the URL with your actual API endpoint
  const response = await axios.get<KPIData>('https://api.example.com/erp/kpi');
  return response.data;
});

const initialState: AnalyticsState = {
  kpiData: null,
  status: 'idle',
  error: null,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    // Define additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchKPIData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchKPIData.fulfilled, (state, action: PayloadAction<KPIData>) => {
        state.status = 'succeeded';
        state.kpiData = action.payload;
      })
      .addCase(fetchKPIData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch KPI data';
      });
  },
});

export default analyticsSlice.reducer;
