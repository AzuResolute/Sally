namespace DatingApp.API.Helpers
{
    public class UserParams
    {
        private const int MaxPageSize = 32;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 8;
        public int PageSize
        {
            get { return pageSize;}
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value;}
        }

        public int UserId { get; set; }
        public string Gender { get; set; }
        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 65;

        public string OrderBy { get; set; }

        public bool Likees { get; set; } = false;
        public bool Likers { get; set; } = false;
    }
}