class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false, index: true
      t.integer :likee_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
