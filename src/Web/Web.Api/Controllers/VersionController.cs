using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;

namespace Jbuisson.Blog.Web.Api.Controllers
{
    [Route("version")]
    public class VersionController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            var version = Assembly.GetExecutingAssembly().GetName().Version.ToString();
            var response = Request.CreateResponse(HttpStatusCode.OK);

            response.Content = new StringContent(version);

            return response;
        }
    }
}