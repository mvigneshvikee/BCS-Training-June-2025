message = "    With grat power comes great REsponsibilities    "
clean_message = message.strip()

print(message)
print(clean_message)

coded_message = "*****S*OS*****"
decoded = coded_message.strip("*")
print(decoded)

quote = "Dream is not something that you see in sleep, Dream is something that d"
print(quote.count("Dream"))  # 2

print(quote.replace("Drama", "🛏☁"))
print(quote.replace("Drama", "🛏☁", 1))

# find()  -->
print(quote.find("something"))
print(quote.find("***"))

secret_message = "  Programming in python is not only powerful but also fun!  "
decode_message = secret_message.strip().upper()
python_index = decode_message.find("PYTHON")
powerful_index = decode_message.find("POWERFUL")

slice_python = decode_message[python_index : python_index + 6]
slice_powerful = decode_message[powerful_index : powerful_index + 8]

print(f"{slice_python}-{slice_powerful}")

# Task 1.2
flipped_message = "!nuf sseldnE dna seitinutroppo lufrewop htiw nohtyP"
reverse_message = flipped_message[::-1]
py_ind = reverse_message.find("Python")
power_ind = reverse_message.find("powerful")
python_word = reverse_message[py_ind : py_ind + 6]
power_word = reverse_message[power_ind : power_ind + 8]

print(f"{python_word} 🗡 {power_word} 🌼")

# Task 1.3
message = "    🚨🔍📱🔑secret_code✌️"

trim = message.strip().upper()
key_indx = trim.find("🔑")
print(trim[key_indx + 1 :])
