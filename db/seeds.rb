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

c1 = Category.create(title: 'Web')
c2 = Category.create(title: 'Mobile')
c3 = Category.create(title: 'Watch')
c4 = Category.create(title: 'Urban')
c5 = Category.create(title: 'Destinations')
c6 = Category.create(title: 'Wilderness')
c7 = Category.create(title: 'Home')
c8 = Category.create(title: 'Food')

d1 = Feed.create( ig_user: 'marymoon_iphoto',
                  category_id: 5,
                  country_id: 1 )

d2 = Feed.create( ig_user: 'insta_moskva',
                  category_id: 1,
                  country_id: 2 )

d3 = Feed.create( ig_user: 'dubcow',
                  category_id: 2,
                  country_id: 3 )

b1.save!
b2.save!
b3.save!
b4.save!
b5.save!
b6.save!
b7.save!
b8.save!
b9.save!

c1.save!
c2.save!
c3.save!
c4.save!
c5.save!
c6.save!
c7.save!

d1.save!
d2.save!
d3.save!
