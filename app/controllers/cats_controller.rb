get '/cats' do
  @cat = Cat.new
  @cat = @cat.create_url["response"]["data"]["images"]["image"]["url"]

  redirect "/users/#{@user.id}"
end