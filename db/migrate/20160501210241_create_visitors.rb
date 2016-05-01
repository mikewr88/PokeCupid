class CreateVisitors < ActiveRecord::Migration
  def change
    create_table :visitors do |t|
      t.integer :visitor_id, null: false, index: true
      t.integer :visitee_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
