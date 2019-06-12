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
    }
}