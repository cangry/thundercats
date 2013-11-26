module ApplicationHelper
	def prettify_address(customer)
		address = customer.address_1
		
		address += "<br/>" + customer.address_2 if ! customer.address_2.blank?
			
			address += "<br/>" + customer.city
			address += ", " + customer.state
			address += " " + customer.zip

		end
end
