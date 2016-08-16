10.times do
  Cat.create(
    name: Faker::Lorem.word.upcase,
    votes: rand(1..20)
    )
end

