10.times do
  Cat.create(
    name: Faker::Space.galaxy,
    vote: rand(1..20)
    )
end

