# Users NEW

get '/users/new' do
  erb :"users/new"
end

# Users CREATE

post '/users' do
  @user = User.new(params[:user])
  if @user.save
    session[:id] = @user.id
    redirect "/users/#{@user.id}"
  else
    @errors = @user.errors.full_messages
    erb :"users/new"
  end
end

# Users SHOW

get '/users/:id' do
  @user = User.find(params[:id])
  erb :"users/show"
end
