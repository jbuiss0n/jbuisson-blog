using log4net;
using log4net.Config;
using log4net.Core;
using StackExchange.Profiling;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Security;
using System.Web.SessionState;
using Jbuisson.Blog.Web.Api.App_Start;

namespace Jbuisson.Blog.Web.Api
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        private static readonly ILog m_logger;

        static WebApiApplication()
        {
            XmlConfigurator.Configure();

            m_logger = LogManager.GetLogger(typeof(WebApiApplication));
        }

        protected void Application_Start()
        {
            GlobalConfiguration.Configure(Startup.RegisterWebApi);

            m_logger.Info("Application_Start");
        }

        protected void Application_End()
        {
            m_logger.Info("Application_End");
        }

        protected void Application_BeginRequest()
        {
            HandleCors();

            if (ConfigurationManager.AppSettings["MiniProfiler.Enable"] == "True")
            {
                MiniProfiler.Start();
                MiniProfiler.Settings.Results_List_Authorize = h => true;
            }
        }

        protected void HandleCors()
        {
            var origin = HttpContext.Current.Request.Headers["Origin"];
            var allowed = ConfigurationManager.AppSettings["CORS-Origins"];

            if (String.IsNullOrEmpty(origin))
                return;

            if (allowed != "*" && !allowed.Contains(origin))
                return;

            HttpContext.Current.Response.AppendHeader("Access-Control-Allow-Origin", origin);
            HttpContext.Current.Response.AppendHeader("Access-Control-Allow-Headers", "Authorization,Content-Type,X-Requested-With");
            HttpContext.Current.Response.AppendHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,HEAD");
            HttpContext.Current.Response.AppendHeader("Access-Control-Allow-Credentials", "true");

            if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
            {
                HttpContext.Current.Response.AppendHeader("Cache-Control", "public, max-age=600");
                HttpContext.Current.Response.StatusCode = 200;
                HttpContext.Current.Response.End();
            }
        }

        protected void Application_PreSendRequestHeaders()
        {
            Response.Headers.Remove("Server");
            Response.Headers.Remove("X-AspNet-Version");
            Response.Headers.Remove("X-AspNetMvc-Version");
        }

        protected void Application_EndRequest()
        {
            if (ConfigurationManager.AppSettings["MiniProfiler.Enable"] == "True")
            {
                try
                {
                    MiniProfiler.Stop();
                }
                catch (Exception exception)
                {
                    m_logger.Error("Application_EndRequest:MiniProfiler.Stop", exception);
                }
            }
        }
    }
}