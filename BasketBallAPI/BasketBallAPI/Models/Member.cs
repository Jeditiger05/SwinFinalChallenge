using System;
using System.Collections.Generic;

#nullable disable

namespace BasketBallAPI.Models
{
    public partial class Member
    {
        public Member()
        {
            Fixtures = new HashSet<Fixture>();
        }

        public int MemberId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool Pending { get; set; }
        public string UserType { get; set; }

        public virtual ICollection<Fixture> Fixtures { get; set; }
    }
}
