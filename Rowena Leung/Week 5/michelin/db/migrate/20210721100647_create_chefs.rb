class CreateChefs < ActiveRecord::Migration[5.2]
  def change
    create_table :chefs do |t|
      t.text :name
      t.text :nationality
      t.integer :michelin
      t.text :image
      t.timestamps
    end
  end
end
