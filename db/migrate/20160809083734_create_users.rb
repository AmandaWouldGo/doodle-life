class CreateUsers < ActiveRecord::Migration
  def change

    create_table :users do |t|
      t.string :full_name
      t.string :username
      t.string :email
      t.string :bio
      t.string :website
      t.string :profile_picture
      t.string :password_hash
      t.string :instagram_id

      t.timestamps null: false
    end

  end
end
