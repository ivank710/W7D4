json.extract! @guest, :name, :age, :favorite_color

@guest.gifts.each do |gift|
  json.set! :gifts do
    json.set! :title, gift.title 
    json.set! :description, gift.description
  end
end