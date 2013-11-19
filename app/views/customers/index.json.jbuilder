json.array!(@customers) do |customer|
  json.extract! customer, :name, :phone, :email, :address_1, :address_2, :city, :state, :zip
  json.url customer_url(customer, format: :json)
end
