using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BasketBallAPI.Models
{
    public partial class BasketBallDBContext : DbContext
    {
        public BasketBallDBContext()
        {
        }

        public BasketBallDBContext(DbContextOptions<BasketBallDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Fixture> Fixtures { get; set; }
        public virtual DbSet<Member> Members { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=BasketBallDB;Trusted_Connection=True;");
                optionsBuilder.UseSqlServer("Server=database-1.cglpw9iiyqjp.us-east-1.rds.amazonaws.com,1433;Database=BasketBallDB;User=admin;Password=Heyletmein05;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Fixture>(entity =>
            {
                entity.HasKey(e => e.FixtureNumber)
                    .HasName("PK_Fixture");

                entity.Property(e => e.FixtureDate).HasColumnType("datetime");

                entity.Property(e => e.Payee).HasMaxLength(50);

                entity.Property(e => e.Venue)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Member)
                    .WithMany(p => p.Fixtures)
                    .HasForeignKey(d => d.MemberId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Member_Fixture");
            });

            modelBuilder.Entity<Member>(entity =>
            {
                entity.ToTable("Member");

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UserType)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
