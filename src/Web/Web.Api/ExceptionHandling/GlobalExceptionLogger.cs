using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.ExceptionHandling;

namespace Jbuisson.Blog.Web.Api.ExceptionHandling
{
    public class GlobalExceptionLogger : ExceptionLogger
    {
        static GlobalExceptionLogger()
        {
        }

        public override void Log(ExceptionLoggerContext context)
        {

        }
    }
}
