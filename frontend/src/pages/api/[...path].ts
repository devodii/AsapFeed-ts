import {createProxyMiddleware} from "http-proxy-middleware";
import {NextApiRequest, NextApiResponse} from "next";

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

const proxyHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const proxy: any = createProxyMiddleware("/api", {
    target: process.env.API_URL,
    changeOrigin: true,
    ws: false,
    pathRewrite: {
      "^/api": "",
    },
    headers: {
      "Content-Type": "application/json",
    },
    onProxyRes: (proxyRes, req, res) => {
      const cookie = proxyRes.headers["set-cookie"];

      if (cookie) {
        const sessionId = cookie[0].split(";")[0].split("=")[1];
        proxyRes.headers[
          "x-auth"
        ] = `session=${sessionId}; Path=/; HttpOnly; Max-Age=10800`; // 5 hours
      } else {
        proxyRes.headers["x-auth"] = `session=; Path=/; HttpOnly; Max-Age=0`; // Expired
      }
      console.log(cookie)
      return cookie
    },
  });


  proxy(req, res, (err: Error) => {
    if (err) {
      throw err;
    }

    throw new Error(`Local proxy received bad request for ${req.url}`);
  });
};

export default proxyHandler;
