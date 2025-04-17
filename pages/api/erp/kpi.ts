// pages/api/erp/kpi.ts

import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Define the shape of the response.
 */
type KPIData = {
  deliveryTime: number;
  vehicleUsage: number;
  revenue: number;
};

/**
 * API Route handler for GET /api/erp/kpi
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<KPIData | { error: string }>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);                   // :contentReference[oaicite:0]{index=0}
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Here you would fetch real data, e.g. from your microservice or database.
  // For demo purposes, we return hard‑coded values.
  const data: KPIData = {
    deliveryTime: 42,    // average delivery time in hours
    vehicleUsage: 78,    // percent of fleet in use
    revenue: 1250,     // revenue in your currency
  };

  return res.status(200).json(data);                   // :contentReference[oaicite:1]{index=1}
}
