<%--
  Created by IntelliJ IDEA.
  User: micka
  Date: 12/13/2020
  Time: 9:50 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
  </head>
  <body>

    <form action="calculate" method="post">
      <input type="number" name="addLeft"> + <input type="number" name="addRight"> =
      <input type="text" value="<%=request.getParameter("addResult") == null ? "" : request.getParameter("addResult") %>" name="addResult" readonly>
      <br>
      <input type="number" name="multiplyLeft"> x <input type="number" name="multiplyRight"> =
      <input type="text" value="<%=request.getParameter("multiplyResult") == null ? "" : request.getParameter("multiplyResult") %>" name="multiplyResult" readonly>
      <br>
      <input type="submit" value="Submit">
    </form>

  </body>
</html>
