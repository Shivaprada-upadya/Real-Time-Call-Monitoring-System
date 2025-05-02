import React, { useEffect, useState } from 'react';
import { fetchAllCalls, fetchActiveCalls } from '../services/api';
import CallTable from './CallTable';
import MetricsChart from './MetricsChart';

const Dashboard = () => {
  const [allCalls, setAllCalls] = useState([]);
  const [activeCalls, setActiveCalls] = useState([]);

  useEffect(() => {
    loadCalls();

    const interval = setInterval(() => {
      loadCalls();
    }, 5000); // Auto-refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const loadCalls = async () => {
    const all = await fetchAllCalls();
    const active = await fetchActiveCalls();
    setAllCalls(all.data);
    setActiveCalls(active.data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Real-Time Call Monitoring Dashboard</h1>
      <MetricsChart calls={allCalls} />
      <CallTable title="Active Calls" calls={activeCalls} />
      <br />
      <CallTable title="All Calls" calls={allCalls} />
    </div>
  );
};

export default Dashboard;
