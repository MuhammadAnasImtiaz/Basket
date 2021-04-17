using System.Linq;
using API.Core.Specifications;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class SpecificationEvaluator<TEntity> where TEntity : BaseEntity
    {
        public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery,
        ISpecification<TEntity> spec)
        {
            var query = inputQuery;

            if(spec.Creteria !=  null){
                query = query.Where(spec.Creteria);
            }

            query = spec.Includes.Aggregate(query, (current,include) => current.Include(include));

            return query;
        }
    }
}