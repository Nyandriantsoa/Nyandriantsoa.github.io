import domain.BeerExpert;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

public class BeerSelect extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        resp.setContentType("text/html");
//        PrintWriter out = resp.getWriter();
//
//        out.println("Beer Selection Advice<br>");
//        String c = req.getParameter("color");
//        out.println("<br>Got beer color " + c);

        String c = req.getParameter("color");
        BeerExpert be = new BeerExpert();
        List result = be.getBrands(c);

        result.forEach(e -> System.out.println(e));

        req.setAttribute("styles", result);
        RequestDispatcher view = req.getRequestDispatcher("result.jsp");
        view.forward(req, resp);
    }
}
