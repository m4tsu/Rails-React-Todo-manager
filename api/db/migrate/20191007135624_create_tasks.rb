class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title, limit: 256
      t.text :content
      t.integer :status, limit: 2, default: 0
      t.timestamps
    end
  end
end
