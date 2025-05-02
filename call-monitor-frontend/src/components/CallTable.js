import React from 'react';

const CallTable = ({ calls, title }) => (
  <div>
    <h2>{title}</h2>
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Caller</th>
          <th>Receiver</th>
          <th>Status</th>
          <th>Latency</th>
          <th>Jitter</th>
          <th>Duration (s)</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {calls.map((call) => (
          <tr key={call.id}>
            <td>{call.caller}</td>
            <td>{call.receiver}</td>
            <td>{call.status}</td>
            <td>{call.latency}</td>
            <td>{call.jitter}</td>
            <td>{call.duration}</td>
            <td>{call.timestamp?.replace("T", " ").slice(0, 19)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CallTable;
