import random

senha = ""

caracteres = "cdjfgh27480*)+#@65¨%VSXZP"

for i in range(8):
    senha += random.choice(caracteres)
    
print('--'*20)
print('A senha gerada foi:')
print(senha)
print('--'*20)