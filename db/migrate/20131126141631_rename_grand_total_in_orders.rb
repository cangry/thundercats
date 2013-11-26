class RenameGrandTotalInOrders < ActiveRecord::Migration
  def change
  	rename_column :orders, :grand_toatal, :grand_total 
  end
end
