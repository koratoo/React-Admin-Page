import React, { useState } from "react";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Settings</h1>
      <p style={styles.subtitle}>Configure your settings here.</p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>General Settings</h2>
        <div style={styles.settingItem}>
          <label style={styles.label}>Enable Notifications</label>
          <button
            onClick={handleToggle}
            style={{
              ...styles.toggleButton,
              backgroundColor: notificationsEnabled ? "#4CAF50" : "#f44336",
            }}
          >
            {notificationsEnabled ? "Enabled" : "Disabled"}
          </button>
        </div>

        <div style={styles.settingItem}>
          <label style={styles.label}>Theme</label>
          <select
            value={theme}
            onChange={handleThemeChange}
            style={styles.select}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Account Settings</h2>
        <div style={styles.settingItem}>
          <label style={styles.label}>Change Email</label>
          <input
            type="email"
            placeholder="Enter new email"
            style={styles.input}
          />
        </div>

        <div style={styles.settingItem}>
          <label style={styles.label}>Change Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            style={styles.input}
          />
        </div>
      </div>

      <button style={styles.saveButton}>Save Changes</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px 40px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#444",
    marginBottom: "20px",
  },
  settingItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  label: {
    fontSize: "1rem",
    color: "#333",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    width: "300px",
  },
  select: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  toggleButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
  saveButton: {
    padding: "15px 30px",
    fontSize: "1.2rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "block",
    margin: "0 auto",
  },
};

export default Settings;
