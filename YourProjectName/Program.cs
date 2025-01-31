var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder => builder
            .WithOrigins("http://localhost:5173")
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Remove HTTPS redirection since we're using HTTP
// app.UseHttpsRedirection();

// Add CORS before routing
app.UseCors("AllowReactApp");

app.UseRouting();
app.UseAuthorization();

// Serve static files (if serving a frontend)
app.UseStaticFiles();
app.MapFallbackToFile("index.html"); // For client-side routing (e.g., React, Angular)

// Add a root endpoint
app.MapGet("/", () => "Welcome to the API! Navigate to /swagger for the Swagger UI.");
app.MapPost("/api/personal-details", async (PersonalDetails details) =>
{
    // TODO: Add your business logic here (e.g., save to database)
    return Results.Ok(new { message = "Personal details received", data = details });
});
app.MapControllers();

app.Run();