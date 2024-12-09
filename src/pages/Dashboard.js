import React from "react";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <p style={styles.subtitle}>Welcome to the Admin Dashboard.</p>

      <div style={styles.cardContainer}>
        {/* Summary Cards */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Total Users</h2>
          <p style={styles.cardValue}>1,234</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Active Sessions</h2>
          <p style={styles.cardValue}>342</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Revenue</h2>
          <p style={styles.cardValue}>$12,345</p>
        </div>
      </div>

      <div style={styles.graphContainer}>
        {/* Placeholder for a Graph */}
        <h2 style={styles.graphTitle}>Activity Overview</h2>
        <div style={styles.graphPlaceholder}>
          <p>Graph will be here.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  card: {
    flex: "1",
    margin: "0 10px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "10px",
  },
  cardValue: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  graphContainer: {
    marginTop: "20px",
  },
  graphTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  graphPlaceholder: {
    height: "300px",
    border: "2px dashed #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#888",
    fontSize: "1rem",
  },
};

export default Dashboard;
