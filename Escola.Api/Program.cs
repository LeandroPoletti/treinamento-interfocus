using InterfocusConsole.Services;
using NHibernate;
using NHibernate.Cfg;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddSingleton<ISessionFactory>((s) =>
{
    var config = new Configuration();
    config.Configure();
    return config.BuildSessionFactory();
});

if (true)
{
    // configura SQL SERVER
}
else
{
    // configura postgres
}
builder.Services.AddTransient<AlunoService>();
builder.Services.AddTransient<CursoService>();

builder.Services.AddCors(
<<<<<<< HEAD
    b => b.AddDefaultPolicy(c => 
        c.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin()
=======
    b => b.AddDefaultPolicy(
        c=> c.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin()
>>>>>>> f35b26a (api)
    )
);

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();
<<<<<<< HEAD

app.UseCors();

=======
app.UseCors();
>>>>>>> f35b26a (api)
app.UseAuthorization();

app.UseDeveloperExceptionPage();

app.MapControllers();

app.Run();
