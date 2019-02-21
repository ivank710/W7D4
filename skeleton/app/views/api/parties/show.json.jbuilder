json.extract! @party, :name, :location

@party.guests.each do |guest|
  json.set! :guests do 
    json.set! :name, guest.name
    json.set! :age, guest.age
    json.set! :favorite_color, guest.favorite_color
    guest.gifts.each do |gift|
      json.set! :gifts do 
        json.set! :title, gift.title
        json.set! :description, gift.description
      end
    end
  end
end