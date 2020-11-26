using System;
using System.Collections.Generic;

#nullable disable

namespace BasketBallAPI.Models
{
    public partial class Fixture
    {
        public int FixtureNumber { get; set; }
        public DateTime FixtureDate { get; set; }
        public string? Payee { get; set; }
        public double? CourtCost { get; set; }
        public string Venue { get; set; }
        public int MemberId { get; set; }

        public virtual Member Member { get; set; }
    }
}
