get '/cats' do
  @cat = Cat.new

  redirect "/users/#{@user.id}"
end