using Microsoft.Owin;
using StructureMap;
using System.Web.Http;
using System.Web.Http.ExceptionHandling;
using Jbuisson.Blog.Web.Api.App_Start;
using Jbuisson.Blog.Web.Api.DependencyResolution;
using WebActivatorEx;
using System.Web.Http.Filters;
using Microsoft.AspNet.WebApi.Extensions.Compression.Server;
using System.Net.Http.Extensions.Compression.Core.Compressors;
using Jbuisson.Blog.Web.Api.ExceptionHandling;
using Owin;

[assembly: PreApplicationStartMethod(typeof(Startup), "Start")]
[assembly: ApplicationShutdownMethod(typeof(Startup), "End")]
[assembly: OwinStartup(typeof(Startup))]

namespace Jbuisson.Blog.Web.Api.App_Start
{
    public class Startup
    {
        private static readonly IContainer m_container;

        static Startup()
        {
            m_container = IoC.Initialize();
        }

        public static void Start()
        {
            var resolver = new StructureMapWebApiDependencyResolver(m_container);

            GlobalConfiguration.Configuration.DependencyResolver = resolver;
            GlobalConfiguration.Configuration.MessageHandlers.Insert(0, new ServerCompressionHandler(new GZipCompressor(), new DeflateCompressor()));
        }

        public static void End()
        {
            GlobalConfiguration.Configuration.DependencyResolver.Dispose();
        }

        public void Configuration(IAppBuilder app)
        {
        }

        public static void RegisterWebApi(HttpConfiguration config)
        {
            // Custom action filter provider which does ordering
            config.Services.Replace(typeof(IFilterProvider), new ConfigurationFilterProvider());

            // Web API global error handling
            config.Services.Add(typeof(IExceptionLogger), new GlobalExceptionLogger());

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "v1/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}