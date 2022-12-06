# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# create a method called association
# it will take in an array and a letter as parameters
# the function will look through the array for the letter with the select built in method
# it will return all the words that are true for the include built in method
# invoke the function with the arguments

# def association array, letter
#     array.each do |value|
#         if value.include?(letter) == true
#             value
#         elsif value.include?(letter) == false
#             array.delete(value) 
#         end
#     end
# end
# p association beverages_array, letter_o

# p association beverages_array, letter_t

# ["coffee", "juice", "soda water"]
# ["juice", "soda water"]

# p association beverages_array, letter_t

# ["tea", "water", "soda water"]
# def association array, letter
#     array.each do |value|
#         if value.include?(letter) == false
#             array.delete(value) 
#         end
#     end
# end
# p association beverages_array, letter_o
# ["coffee", "juice", "soda water"]

# def association array, letter
# array.delete_if { |i| array[i].includes?(letter) == false}
# end
# p association beverages_array, letter_o

def association array, letter
array.select {|item| item.include?(letter)}
end
p association beverages_array, letter_o
p association beverages_array, letter_t

# ["coffee", "soda water"]
# ["tea", "water", "soda water"]
# went through many built in methods


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# create a function called alphabet
# the parameter will be a hash
    # the function will take the hash and make it into one array with built in methods values and flatten.
    # values will take the key pairs and return only the values. Flatten will reduce the arrays into one.
    # the function will sort the array in alphabet order with sort built in method
    # return the correct array
# test function

def alphabet hash
    hash.values.flatten.sort
end

p alphabet us_states

["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize(model, wheels=2)
    @model = model
    @wheels = wheels
    @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster number
        @current_speed += number
    end
    def brake num
        if @current_speed < num
            @current_speed = 0      
        else @current_speed -= num
        end
    end
end
my_bike = Bike.new("Trek")
p my_bike.bike_info

# "The Trek bike has 2 wheels and is going 0 mph."

p my_bike.pedal_faster 10
p my_bike.pedal_faster 18
p my_bike.brake 5
p my_bike.brake 25

# 10
# 28
# 23
# 0
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
