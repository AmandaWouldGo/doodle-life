get '/' do
  photo = Unsplash::Photo.find("tAKXap853rY")
  p photo
end


# look at httparty and make a model for cats or photos