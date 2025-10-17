original = input()
inicio = int(input())
fim = int(input())

substring = ""
for i in range(inicio, fim):
    substring += original[i]

print(substring)