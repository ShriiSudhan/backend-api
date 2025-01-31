public class UserData
{
    public PersonalDetails PersonalDetails { get; set; }
    public List<Address> Addresses { get; set; }
    public List<Employment> EmploymentHistory { get; set; }
    public ContactDetails ContactDetails { get; set; }
}

public class PersonalDetails
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string SSN { get; set; }
}

public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }
}

public class Employment
{
    public string Company { get; set; }
    public string Position { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public string Responsibilities { get; set; }
}

public class ContactDetails
{
    public string Email { get; set; }
    public string AdditionalEmail { get; set; }
    public string ResidencePhone { get; set; }
    public string BusinessPhone { get; set; }
    public string WebAddress { get; set; }
}