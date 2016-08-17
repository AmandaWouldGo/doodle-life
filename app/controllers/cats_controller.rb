# Cats INDEX
# get '/cats' do
#   @cats = Cat.all
#   redirect "/cats/_cat_list"
# end

# Cats NEW
get '/cats/new' do
  @cat = Cat.new
  if request.xhr?
    #pop up a form from a partial
    erb :"/cats/_new_cat_form", layout: false
  else
    erb :"cats/new"
  end
end

# # Cats CREATE
post '/cats' do
  @cat = Cat.new(params[:cat])

  if @cat.save
    redirect '/cats'
  else
    erb :'cats/new'
  end
  
end
