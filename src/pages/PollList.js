import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const data = [
  {
    id: 86,
    title: "10명에게 묻는 가능 시간",
    dateCreated: "2022.04.06",
    deadline: "2022.04.07",
    visibility: "일부 공개",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: 85,
    title: "언제 가장 한가하세요?",
    dateCreated: "2022.04.06",
    deadline: "2022.04.26",
    visibility: "전체 공개",
    imageUrl: "https://via.placeholder.com/50",
  },
];

const PollList = () => {
  return (
    <div style={{ padding: "16px" }}>
      <h2>전체 폴 (2)</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>IDX</TableCell>
              <TableCell>대표이미지</TableCell>
              <TableCell>질문</TableCell>
              <TableCell>업로드일</TableCell>
              <TableCell>종료일</TableCell>
              <TableCell>공개여부</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <img
                    src={row.imageUrl}
                    alt="Poll Thumbnail"
                    style={{ width: "50px", height: "50px" }}
                  />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.dateCreated}</TableCell>
                <TableCell>{row.deadline}</TableCell>
                <TableCell>{row.visibility}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PollList;
