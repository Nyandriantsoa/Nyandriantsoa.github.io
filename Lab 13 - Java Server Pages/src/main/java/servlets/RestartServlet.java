package servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RestartServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        request.getSession().removeAttribute("quiz");
        request.getSession().removeAttribute("attempt");
        request.getSession().removeAttribute("error");
        request.getSession().removeAttribute("age");
        request.getSession().removeAttribute("ageError");

        resp.sendRedirect("/");
    }
}
