using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError (this HttpResponse response, string message) {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Exponse-Headers", "Application-Error"); //to allow app error to be displayed
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}