
<%@ page import="domain.Quiz" %><%--
  Created by IntelliJ IDEA.
  User: micka
  Date: 1/2/2021
  Time: 7:37 PM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
  <title>NumberQuiz</title>
</head>
<body>
<form method="post" action="/">
  <h3>Have fun with NumberQuiz!</h3>
  <% Integer age = (Integer) request.getSession().getAttribute("age");%>
  <input type="text" name="age" value="<%= age == null ? "" : age %>" >
  <%
    String ageError = (String)request.getSession().getAttribute("ageError");
    if(ageError != null){ %>
      <%= ageError %>
  <% } %>

  <p>Your current score is: <%= ((Quiz)request.getSession().getAttribute("quiz")).getNumCorrect() %> </p>
  <p>Guess the next number in the sequence! <%= ((Quiz)request.getSession().getAttribute("quiz")).getCurrentQuestion() %></p>
  <p>Your answer:
    <input type='number' name='txtAnswer' value='' required/>
    <%
      String s = (String)request.getSession().getAttribute("hint");
      if(s != null){ %>
        <%= s %>
    <% } %>
  </p>

  <!-- IF -->
  <% if (request.getSession().getAttribute("error").toString().equals("true")) { %>
    <p style='color:red'>Your last answer was not correct! Please try again</p>
  <% } %>

  <p><input type='submit' name='btnNext' value='Next' /></p>

  <a href="/restart"> <button type="button">Restart</button> </a>

</form>

<form method="get" action="hint">
  <button type="submit"> Hint </button>
</form>
</body>
</html>
