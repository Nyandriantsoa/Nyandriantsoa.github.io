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
    <title>NumberQuiz is Over</title>
</head>
<body>
<p style='color:red'>The number quiz is over!</p>

<p> Your age is <%= request.getSession().getAttribute("age") %> </p>
<p> Your current score is <%= ((Quiz)request.getSession().getAttribute("quiz")).getNumCorrect() %> </p>
<p style='color:red'> Your grade is <%= request.getSession().getAttribute("grade") %> </p>

<a href="/restart"> <button>Restart</button> </a>

</body>
</html>
