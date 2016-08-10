require 'bcrypt'

class User < ActiveRecord::Base

  validates :username, uniqueness: true, presence: true
  validates :email, presence: true

  include 'BCrypt'

  has_secure_password
end

