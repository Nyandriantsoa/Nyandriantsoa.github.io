<%--
  Created by IntelliJ IDEA.
  User: micka
  Date: 1/10/2021
  Time: 6:51 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="java.util.*" %>
<%@ page import="java.io.PrintWriter" %>

<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1 align="center"> Beer recommendations JSP </h1>

    <p>

<%--        <%--%>
<%--            List styles = (List)request.getAttribute("styles");--%>
<%--            Iterator it = styles.iterator();--%>
<%--            while (it.hasNext()){--%>
<%--                out.print("<br>try: " + it.next());--%>
<%--            }--%>
<%--        %>--%>

        <c:forEach items="${styles}" var="brand">
            <c:out value = "try: ${brand}"/><p>
        </c:forEach>

    </p>

</body>
</html>
