package servlets;

import domain.Quiz;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HintServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        Quiz quiz = (Quiz) req.getSession().getAttribute("quiz");
        req.getSession().setAttribute("hint", quiz.getHint());

        System.out.println("Tonga ato" + req.getSession().getAttribute("hint"));

        req.getRequestDispatcher("start.jsp").forward(req, resp);

    }
}
