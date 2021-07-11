using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Prezantimet;
using Application.Trips;
using Application.Notat;
using Application.Arsyetimet;
using Application.Njoftimet;
using Application.KerkesaNdihme;
using Application.Eventet;
using Application.PlaniM;
using Application.Competitions;
using Domain;
using Microsoft.AspNetCore.Identity;
using FluentValidation.AspNetCore;
using API.Middleware;
using Application.Interfaces;
using Infrastructure.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Application.Qytetet;
using Application.Vleresimet;
using Application.KohezgjatjaOres;
using Application.Sallat;
using Application.MaterialiMesimor;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(opt => 
            {
                opt.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
            });
            services.AddCors(opt => 
            {
                opt.AddPolicy("CorsPolicy", policy => 
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });
            services.AddMediatR(typeof(ListTrips.Handler).Assembly);
            services.AddMediatR(typeof(ListNotat.Handler).Assembly);
            services.AddMediatR(typeof(ListaArsyetimeve.Handler).Assembly);
            services.AddMediatR(typeof(ListaNjoftimeve.Handler).Assembly);
            services.AddMediatR(typeof(ListoKerkesatN.Handler).Assembly);
            services.AddMediatR(typeof(ListEventet.Handler).Assembly);
            services.AddMediatR(typeof(ListPrezantimet.Handler).Assembly);
            services.AddMediatR(typeof(ListQytetet.Handler).Assembly);
            services.AddMediatR(typeof(ListVleresimet.Handler).Assembly);
            services.AddMediatR(typeof(ListoKoheZ.Handler).Assembly);
            services.AddMediatR(typeof(ListSallat.Handler).Assembly);
            services.AddMediatR(typeof(ListPlanetMesimor.Handler).Assembly);
            services.AddMediatR(typeof(ListCompetitions.Handler).Assembly);
            services.AddMediatR(typeof(ListMaterialet.Handler).Assembly);

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["TokenKey"]));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(opt => {
                opt.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = key,
                    ValidateAudience = false,
                    ValidateIssuer = false
                };
            });

            services.AddMvc(opt => {
                var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
                opt.Filters.Add(new AuthorizeFilter(policy));
            })
                .AddFluentValidation(cfg => 
                cfg.RegisterValidatorsFromAssemblyContaining<CreateCompetition>()
                .RegisterValidatorsFromAssemblyContaining<CreateTrip>())
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            
            /*services.AddAuthorization(options =>
            {
                options.AddPolicy("Admin",
                    authBuilder =>
                    {
                        authBuilder.RequireRole("Admin");
                    });
                options.AddPolicy("Profesor", 
                    authBuilder => {
                        authBuilder.RequireRole("Profesor");
                    });
                 options.AddPolicy("Student", 
                    authBuilder => {
                        authBuilder.RequireRole("Student");
                    });
                 options.AddPolicy("Guardian", 
                    authBuilder => {
                        authBuilder.RequireRole("Guardian");
                    });
            });*/

            services.AddIdentityCore<AppUser>().AddRoles<AppRole>().AddEntityFrameworkStores<DataContext>().AddSignInManager<SignInManager<AppUser>>();

            services.AddScoped<IJwtGenerator, JwtGenerator>();
            services.AddScoped<IUserAccessor, UserAccessor>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseMiddleware<ErrorHandlingMiddleware>();
            if (env.IsDevelopment())
            {
                //app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                //app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseCors("CorsPolicy");
            app.UseMvc();
        }
    }
}
