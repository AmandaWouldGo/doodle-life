# # # Cats INDEX
# get '/cats' do
#   @cats = Cat.all
#   erb :"/cats/_cat_list"
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
    if request.xhr?
      @cats = Cat.all

      page = erb :"cats/_cat_list", layout: false, locals: {cats: @cats}

      json cats: @cats, page: page
    else
      erb :'cats/new'
    end
  else
      erb :'cats/new'
  end
end
