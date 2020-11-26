USE BasketBallDB
GO

SELECT *
FROM Member
SELECT *
FROM Fixtures

INSERT INTO Member
    ([Name], Email, [Password], Pending, UserType)
VALUES
    ('Admin', 'admin@admin.com', 'password', 0, 'Admin'),
    ('John', 'john@john.com', 'password', 0, 'Member'),
    ('Stephen', 'stephen@stephen.com', 'password', 0, 'Member'),
    ('Mitchell', 'mitch@mitch.com', 'password', 1, 'Member')

INSERT INTO Fixtures
    (FixtureDate, Venue, MemberId)
VALUES
    ('2020-9-25 02:00:00.000', 'Swinburne Campus', 1),
    ('2020-10-15 03:00:00.000', 'Craigieburn ClubHouse', 1),
    ('2020-1-02 15:00:00.000', 'Fitzroy Gardens', 2),
    ('2020-12-12 16:30:00.000', 'Somewhere There', 3),
    ('2020-12-21 16:30:00.000', 'Lost and Found', 1)