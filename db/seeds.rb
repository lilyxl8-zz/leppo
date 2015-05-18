u1 = User.create(email: 'a@a.com', password: 'password')
u2 = User.create(email: 'b@b.com', password: 'password')

b1 = Country.create(name: 'Russia')
b2 = Country.create(name: 'Sweden')
b3 = Country.create(name: 'Germany')
b4 = Country.create(name: 'Netherlands')
b5 = Country.create(name: 'Japan')
b6 = Country.create(name: 'Ukraine')
b7 = Country.create(name: 'Thailand')
b8 = Country.create(name: 'China')
b9 = Country.create(name: 'Brazil')
b10 = Country.create(name: 'France')
b11 = Country.create(name: 'Argentina')
b12 = Country.create(name: 'USA')
b13 = Country.create(name: 'Spain')
b14 = Country.create(name: 'Hungary')
b15 = Country.create(name: 'Switzerland')
b16 = Country.create(name: 'Austria')

c1 = Category.create(title: 'Web')
c2 = Category.create(title: 'Mobile')
c3 = Category.create(title: 'Watch')
c4 = Category.create(title: 'Urban')
c5 = Category.create(title: 'Destinations')
c6 = Category.create(title: 'Typography')
c7 = Category.create(title: 'Wilderness')
c8 = Category.create(title: 'Food')
c9 = Category.create(title: 'Home')
c10 = Category.create(title: 'Graphics')
c11 = Category.create(title: 'Designers')
c12 = Category.create(title: 'Fashion')

d1 = Feed.create( ig_user: 'marymoon_iphoto',
                  category_id: 5,
                  country_id: 1 )

d2 = Feed.create( ig_user: 'insta_moskva',
                  category_id: 4,
                  country_id: 1 )

d3 = Feed.create( ig_user: 'dubcow',
                  category_id: 8,
                  country_id: 1 )

d4 = Feed.create( ig_user: '5fruits',
                  category_id: 9,
                  country_id: 10 )

d5 = Feed.create( ig_user: 'elo_____',
                  category_id: 4,
                  country_id: 11 )


d6 = Feed.create( ig_user: 'madewithmap',
                  category_id: 5,
                  country_id: 12 )

d7 = Feed.create( ig_user: 'heystudio',
                  category_id: 1,
                  country_id: 13 )

d8 = Feed.create( ig_user: 'csillaklenyanszki12',
                  category_id: 9,
                  country_id: 14 )

d9 = Feed.create( ig_user: 'ligature_ch',
                  category_id: 6,
                  country_id: 15 )

d10 = Feed.create( ig_user: 'thisisdisplay',
                  category_id: 6,
                  country_id: 15 )

d11 = Feed.create( ig_user: 'vanschneider',
                  category_id: 11,
                  country_id: 16 )


d12 = Feed.create( ig_user: 'sergeyminkin',
                  category_id: 11,
                  country_id: 1 )

d13 = Feed.create( ig_user: '1800color',
                  category_id: 5,
                  country_id: 1 )

d14 = Feed.create( ig_user: 'hirozzzz',
                  category_id: 5,
                  country_id: 5 )

d15 = Feed.create( ig_user: 'aiww',
                  category_id: 11,
                  country_id: 8 )

b1.save!
# punodostres
b2.save!
b3.save!
b4.save!
b5.save!
b6.save!
b7.save!
b8.save!
b9.save!
b10.save!
b11.save!
b12.save!
b13.save!
b14.save!
b15.save!
b16.save!

c1.save!
c2.save!
c3.save!
c4.save!
c5.save!
c6.save!
c7.save!
c8.save!
c9.save!
c10.save!
c11.save!
c12.save!

d1.save!
d2.save!
d3.save!
d4.save!
d5.save!
d6.save!
d7.save!
d8.save!
d9.save!
d10.save!
d11.save!
d12.save!
d13.save!
d14.save!
d15.save!
