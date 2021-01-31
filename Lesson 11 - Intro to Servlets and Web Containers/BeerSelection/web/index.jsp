<%--
  Created by IntelliJ IDEA.
  User: micka
  Date: 12/14/2020
  Time: 12:10 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
    <form method="post" action="SelectBeer.do">
      <p>Select beer characteristics </p>

      Color:
      <select name="color" size="1">
        <option value="light"> light </option>
        <option value="amber"> amber </option>
        <option value="brown"> brown </option>
        <option value="dark"> dark </option>
      </select>
      <br><br>

      <center>
        <input type="submit">
      </center>

    </form>
  </body>
</html>
