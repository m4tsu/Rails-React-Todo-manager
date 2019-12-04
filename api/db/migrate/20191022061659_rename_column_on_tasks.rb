class RenameColumnOnTasks < ActiveRecord::Migration[6.0]
  def change
    rename_column :tasks, :content, :detail
    change_column_null :tasks, :detail, true
  end
end
