require 'httparty'
class Cat
  include HTTParty
  base_uri 'http://thecatapi.com/api/images/get'

  def create_url
    self.class.get('?category=boxes&size=small&format=xml')
  end

end