require 'bcrypt'

class User < ActiveRecord::Base

  validates :username, uniqueness: true, presence: true
  validates :email, presence: true

  include BCrypt

  def password
    @password ||= Password.new(password_digest)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_digest = @password
  end

  def authenticate?(input_password)
    self.password == input_password
  end
end

