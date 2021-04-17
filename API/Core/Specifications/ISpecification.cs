using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace API.Core.Specifications
{
    public interface ISpecification<T>
    {
        Expression<Func<T,bool>> Creteria {get;}
        List<Expression<Func<T,object>>> Includes {get;}
    }
}