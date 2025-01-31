using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

[ApiController]
[Route("api/[controller]")]
public class UserDataController : ControllerBase
{
    private readonly string _filePath;

    public UserDataController()
    {
        _filePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "userdata.json");
    }

    [HttpPost("SaveUserDetails")]
    public async Task<IActionResult> SaveUserDetails([FromBody] UserData userData)
    {
        try
        {
            // Log the received data
            Console.WriteLine($"Received user details for: {userData.PersonalDetails?.FirstName} {userData.PersonalDetails?.LastName}");

            // Create directory if it doesn't exist
            var directory = Path.GetDirectoryName(_filePath);
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            // Save to file with indented formatting
            var jsonString = JsonSerializer.Serialize(userData, new JsonSerializerOptions 
            { 
                WriteIndented = true 
            });
            await System.IO.File.WriteAllTextAsync(_filePath, jsonString);

            // Return success response
            return Ok(new { 
                message = "User details saved successfully",
                data = userData 
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error saving user details: {ex.Message}");
            return StatusCode(500, new { 
                message = "Failed to save user details",
                error = ex.Message 
            });
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetUserData()
    {
        try
        {
            if (!System.IO.File.Exists(_filePath))
            {
                return NotFound(new { message = "No data found" });
            }

            var jsonString = await System.IO.File.ReadAllTextAsync(_filePath);
            var userData = JsonSerializer.Deserialize<UserData>(jsonString);
            return Ok(userData);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = ex.Message });
        }
    }
} 