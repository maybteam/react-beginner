import React from "react";
import dayjs from "dayjs";
import "./main.css";

dayjs.locale("ko");

function MainPage() {
  return (
    <main>
      <h1 className="logo">TO DO LIST</h1>
      <date className="todayDate">
        오늘 날짜 : {dayjs(new Date()).format("YYYY. MM. DD")}
      </date>
    </main>
  );
}

export default MainPage;
