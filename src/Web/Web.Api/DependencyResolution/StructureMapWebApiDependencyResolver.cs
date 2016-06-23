using System.Web.Http.Dependencies;
using StructureMap;

namespace Jbuisson.Blog.Web.Api.DependencyResolution
{
    public class StructureMapWebApiDependencyResolver : StructureMapWebApiDependencyScope, IDependencyResolver
    {
        public StructureMapWebApiDependencyResolver(IContainer container)
            : base(container)
        {
        }

        public IDependencyScope BeginScope()
        {
            IContainer child = this.Container.GetNestedContainer();
            return new StructureMapWebApiDependencyResolver(child);
        }
    }
}