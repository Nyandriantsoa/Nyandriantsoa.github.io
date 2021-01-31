import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SimpleCalculator extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String addLeft = req.getParameter("addLeft");
        String addRight = req.getParameter("addRight");

        String multiLeft = req.getParameter("multiplyLeft");
        String multiRight = req.getParameter("multiplyRight");

        Integer add = null;
        if(!addLeft.trim().equals("") && !addRight.trim().equals("")){
            add = Integer.valueOf(addLeft) + Integer.valueOf(addRight);
            req.setAttribute("addResult" , add);
        }

        Integer multi = null;
        if(!multiLeft.trim().equals("") && !multiRight.trim().equals("")){
            multi = Integer.valueOf(multiLeft) * Integer.valueOf(multiRight);
            req.setAttribute("multiplyResult" , multi);
        }

        /*RequestDispatcher view = req.getRequestDispatcher("index.jsp");
        view.forward(req, resp);*/

        PrintWriter out = resp.getWriter();
        out.print("<html>\n" +
                "  <head>\n" +
                "    <title>$Title$</title>\n" +
                "    <link rel=\"stylesheet\" href=\"${pageContext.request.contextPath}/css/style.css\">\n" +
                "  </head>\n" +
                "  <body>");
        out.print("<form method=\"post\">");
        out.print("<input type=\"number\" value=" + addLeft + " name=\"addLeft\"> " +
                "+ <input type=\"number\" value=" + addRight + " name=\"addRight\"> =");
        out.print("<input type=\"text\" value=" + (add == null ? "" : add) + " name=\"addResult\" readonly>");
        out.print("<br>");
        out.print("<input type=\"number\" value=" + multiLeft + " name=\"multiplyLeft\"> " +
                "x <input type=\"number\" value=" + multiRight + " name=\"multiplyRight\"> =");
        out.print("<input type=\"text\" value=" + (multi == null ? "" : multi) + " name=\"multiplyResult\" readonly>");
        out.print("<br>");
        out.print("<input type=\"submit\" value=\"Submit\">");
        out.print("</form>");
        out.print("</body>\n" +
                "</html>");

    }
}
