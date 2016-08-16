# Cats INDEX
get '/cats' do
  @cats = Cat.all
  erb :"cats/index"
end

# Cats NEW
get '/cats/new' do
  @cat = Cat.new
  if request.xhr?
    #pop up a form from a partial
    
  else
  erb :"cats/new"
  end
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
