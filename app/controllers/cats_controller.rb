# Cats INDEX
get '/cats' do
  @cats = Cat.all
  erb :"cats/index"
end

# Cats NEW
get '/cats/new' do
  erb :"cats/new"
end

# # Cats CREATE
post '/cats' do
  @cat = Cat.find(params[:cat])

  if @cat.save
    redirect '/cats'
  else
    erb :'cats/new'
  end
  
end
