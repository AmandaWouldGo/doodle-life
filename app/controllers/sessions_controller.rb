# Sessions NEW

get '/sessions/new' do
  erb :'sessions/new'
end

# Sessions CREATE

post '/session' do
  @user = User.find_by(email: params[:user][:email])
  if @user
    if @user.authenticate?(params[:user][:password])
      session[:id] = @user.id
      redirect "/users/#{@user.id}"
    else
      @error = "Invalid login! Try again!"
      redirect "/sessions/new"
    end
  else
    @error = "You need to register"
    redirect "/sessions/new"
  end
end

# Sessions DELETE

delete '/sessions/:id' do
  session[:id] = nil
  redirect "/sessions/new"
end