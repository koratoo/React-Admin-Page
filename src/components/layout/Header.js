import React from "react";
import { Select, MenuItem, TextField, Button } from "@mui/material";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#000", // 배경색 블랙
        color: "#ff9800", // 텍스트 색상 주황색
        borderBottom: "1px solid #ddd",
        fontFamily: "'Noto Sans', sans-serif", // 헤더 폰트
      }}
    >
      <h2 style={{ margin: 0, fontWeight: 700 }}>SCP Administration</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Select
          defaultValue="Poll"
          size="small"
          style={{
            backgroundColor: "#fff", // 드롭다운 배경 흰색
            color: "#000", // 드롭다운 텍스트 색상
            borderRadius: "4px",
            fontFamily: "'Roboto', sans-serif", // 드롭다운 폰트
          }}
        >
          <MenuItem value="Poll">Poll</MenuItem>
          <MenuItem value="Survey">Survey</MenuItem>
        </Select>
        <TextField
          size="small"
          placeholder="내용을 입력하세요"
          style={{
            backgroundColor: "#fff", // 검색창 배경 흰색
            borderRadius: "4px",
            fontFamily: "'Roboto', sans-serif", // 검색창 폰트
          }}
          InputProps={{
            style: {
              color: "#000", // 검색창 텍스트 색상
            },
          }}
        />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#ff9800", // 버튼 배경 주황색
            color: "#fff", // 버튼 텍스트 흰색
            fontFamily: "'Roboto', sans-serif", // 버튼 폰트
          }}
        >
          검색
        </Button>
      </div>
    </header>
  );
};

export default Header;
