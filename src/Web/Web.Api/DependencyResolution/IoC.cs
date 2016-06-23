using StructureMap;

namespace Jbuisson.Blog.Web.Api.DependencyResolution
{
    public static class IoC
    {
        public static IContainer Initialize()
        {
            return new Container(container =>
            {
                container.AddRegistry<DefaultRegistry>();
            });
        }
    }
}