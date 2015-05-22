u1 = User.create(email: 'a@a.com', password: 'password')
u2 = User.create(email: 'b@b.com', password: 'password')

b1 = Country.create(name: 'Russia')
b3 = Country.create(name: 'Germany')
b5 = Country.create(name: 'Japan')
b8 = Country.create(name: 'China')
b10 = Country.create(name: 'France')
b11 = Country.create(name: 'Argentina')
b12 = Country.create(name: 'USA')
b13 = Country.create(name: 'Spain')
b15 = Country.create(name: 'Switzerland')
b16 = Country.create(name: 'Austria')
# b2 = Country.create(name: 'Sweden')
# b4 = Country.create(name: 'Netherlands')
# b6 = Country.create(name: 'Ukraine')
# b7 = Country.create(name: 'Thailand')
# b9 = Country.create(name: 'Brazil')
# b14 = Country.create(name: 'Hungary')

# c1 = Category.create(title: 'Web')
c4 = Category.create(title: 'Web')
c5 = Category.create(title: 'Urban')
c6 = Category.create(title: 'Destinations')
c8 = Category.create(title: 'Typography')
c9 = Category.create(title: 'Food')
# Home
c10 = Category.create(title: 'Designers')
# c2 = Category.create(title: 'Mobile')
# c3 = Category.create(title: 'Watch')
# c7 = Category.create(title: 'Wilderness')
# c12 = Category.create(title: 'Fashion')

d1 = Feed.create( ig_user: 'marymoon_iphoto',
                  category_id: 3,
                  country_id: 1 )

d2 = Feed.create( ig_user: 'insta_moskva',
                  category_id: 2,
                  country_id: 1 )

d3 = Feed.create( ig_user: 'dubcow',
                  category_id: 5,
                  country_id: 1 )

# d4 = Feed.create( ig_user: '5fruits',
#                   category_id: 9,
#                   country_id: 5 )

d5 = Feed.create( ig_user: 'elo_____',
                  category_id: 2,
                  country_id: 6 )


# d6 = Feed.create( ig_user: 'madewithmap',
#                   category_id: 3,
#                   country_id: 7 )

# d7 = Feed.create( ig_user: 'heystudio',
#                   category_id: 1,
#                   country_id: 8 )

# d8 = Feed.create( ig_user: 'csillaklenyanszki12',
#                   category_id: 1,
#                   country_id: 14 )

d9 = Feed.create( ig_user: 'ligature_ch',
                  category_id: 4,
                  country_id: 9 )

d10 = Feed.create( ig_user: 'thisisdisplay',
                  category_id: 4,
                  country_id: 9 )

d11 = Feed.create( ig_user: 'vanschneider',
                  category_id: 6,
                  country_id: 10 )


d12 = Feed.create( ig_user: 'sergeyminkin',
                  category_id: 6,
                  country_id: 1 )

d13 = Feed.create( ig_user: '1800color',
                  category_id: 3,
                  country_id: 1 )

d14 = Feed.create( ig_user: 'hirozzzz',
                  category_id: 3,
                  country_id: 3 )

d15 = Feed.create( ig_user: 'aiww',
                  category_id: 6,
                  country_id: 4 )

d16 = Feed.create( ig_user: 'uberlinco',
                  category_id: 3,
                  country_id: 2 )


d17 = Feed.create( ig_user: 'lazymomnyc',
                  category_id: 5,
                  country_id: 7 )


l1 = Like.create( user_id: 1, post_id: 21)
l1.save!
l2 = Like.create( user_id: 2, post_id: 121)
l2.save!
l3 = Like.create( user_id: 1, post_id: 121)
l3.save!

b1.save!
# b2.save!
b3.save!
# b4.save!
b5.save!
# b6.save!
# b7.save!
b8.save!
# b9.save!
b10.save!
b11.save!
b12.save!
b13.save!
# b14.save!
b15.save!
b16.save!

c1.save!
# c2.save!
# c3.save!
c4.save!
c5.save!
c6.save!
# c7.save!
c8.save!
c9.save!
c10.save!
c11.save!
# c12.save!

d1.save!
d2.save!
d3.save!
# d4.save!
d5.save!
# d6.save!
# d7.save!
d8.save!
d9.save!
d10.save!
d11.save!
d12.save!
d13.save!
d14.save!
d15.save!
d16.save!
d17.save!
