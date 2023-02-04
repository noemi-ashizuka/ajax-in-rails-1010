puts "Destroying all restaurants"
Restaurant.destroy_all

puts "Creating restaurants..."

5.times do
  Restaurant.create!(
    name: Faker::Restaurant.name,
    address: Faker::Address.full_address
  )
end

puts "Finished!"
