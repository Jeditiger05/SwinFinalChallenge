﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BasketBallAPI.Models;

namespace BasketBallAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketBallController : Controller
    {
        private readonly BasketBallDBContext _context;

        public BasketBallController(BasketBallDBContext context)
        {
            _context = context;
        }

        //Memeber Login
        [HttpPost, Route("memberlogin")]
        public async Task<IActionResult> Login(Login login)
        {
            var member = await _context.Members.Where(m => m.Email == login.Email).FirstOrDefaultAsync();

            if (member != null)
            {
                if (member.Pending == true)
                {
                    return Unauthorized("Account Pending");
                }
                else if (member.Password == login.Password)
                {
                    return Ok(member);
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
            {
                return NotFound();
            }
        }

        //Register Member
        [HttpPost, Route("registermember")]
        public async Task<IActionResult> RegisterMember(Member member)
        {
            try
            {
                _context.Add(member);
                await _context.SaveChangesAsync();
                return Ok(member);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Create a Fixture Record
        [HttpPost, Route("addfixture")]
        public async Task<IActionResult> AddFixture(Fixture fixture)
        {
            try
            {
                _context.Add(fixture);
                await _context.SaveChangesAsync();
                return Ok(fixture);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Return All Furture Bookings
        [HttpGet, Route("getfixtures")]
        public async Task<IActionResult> GetFixtures()
        {
            var fixtures = await _context.Fixtures.Where(b => b.FixtureDate > DateTime.Now).ToListAsync();

            if (fixtures != null)
            {
                return Ok(fixtures);

            }
            else
            {
                return NotFound();
            }
        }

        //Return All Furture Bookings
        [HttpGet, Route("getpastfixtures")]
        public async Task<IActionResult> GetPastFixtures()
        {
            var fixtures = await _context.Fixtures.Where(b => b.FixtureDate < DateTime.Now).ToListAsync();

            if (fixtures != null)
            {
                return Ok(fixtures);

            }
            else
            {
                return NotFound();
            }
        }

        //Update a Coffee Booking
        [HttpPost, Route("updatefixture")]
        public async Task<IActionResult> UpdateFixture(Fixture fixture)
        {
            try
            {
                _context.Fixtures.Update(fixture);
                await _context.SaveChangesAsync();
                return Ok(fixture);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Delete a Coffee Booking
        [HttpDelete, Route("deletefixture")]
        public async Task<IActionResult> DeleteFixture(int fixtureNumber)
        {
            var booking = await _context.Fixtures.Where(b => b.FixtureNumber == fixtureNumber).FirstOrDefaultAsync();

            try
            {
                _context.Remove(booking);
                await _context.SaveChangesAsync();
                return Ok(fixtureNumber);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Return List of Member Names
        [HttpGet, Route("getmemberslist")]
        public async Task<IActionResult> GetMembersList()
        {
            var memebers = await _context.Members.Where(m => m.Pending == false).Select(m => m.Name).ToListAsync();

            if (memebers != null)
            {
                return Ok(memebers);

            }
            else
            {
                return NotFound();
            }

        }

        //Return all Members with pending accounts
        [HttpGet, Route("getpendingmembers")]
        public async Task<IActionResult> GetAllMembers()
        {
            var memebers = await _context.Members.Where(m => m.Pending == true).ToListAsync();

            if (memebers != null)
            {
                return Ok(memebers);

            }
            else
            {
                return NotFound();
            }

        }

        //Activate Member Account
        [HttpPost, Route("activatemember")]
        public async Task<IActionResult> ActivateMember(Member member)
        {
            try
            {
                _context.Members.Update(member);
                await _context.SaveChangesAsync();
                return Ok(member);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Return all Members with total spent on court costs
        [HttpGet, Route("gettotalcost")]
        public async Task<IActionResult> GetMemberCostTotal()
        {
            List<string> members = await _context.Members.Select(m => m.Name).ToListAsync();

            var fixtures = await _context.Fixtures.ToListAsync();

            var totalPaid = 0.0;

            List<TotalPaid> totals = new List<TotalPaid>();

            foreach (string member in members)
            {
                foreach (var fixture in fixtures)
                {
                    if(fixture.Payee != null)
                    {
                        if (fixture.Payee.Equals(member))
                        {
                            totalPaid += (double)fixture.CourtCost;
                        }
                    }

                }

                totals.Add(new TotalPaid { Name = member, Paid = totalPaid });
                totalPaid = 0;
            }

            if (fixtures != null && members != null)
            {
                return Ok(totals);

            }
            else
            {
                return NotFound();
            }

        }
    }
}
