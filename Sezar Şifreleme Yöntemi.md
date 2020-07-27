# Semih
Projem
k_alfabe = "1234567890abcçdefgğhıijklmnoöprsştuüvyzqwx -/{]#£><+}[$!_abc"
b_alfabe = "1234567890ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQWX ABC"

parola = input("Parola Giriniz:")
yenicümle = ""
for i in parola:
    if i in k_alfabe:
        indeks = k_alfabe.index(i)
        yenicümle+=k_alfabe[indeks+3]

    elif i in b_alfabe:
        indeks = b_alfabe.index(i)
        yenicümle+=b_alfabe[indeks+3]

    else:
        print("Bu karakter Alfabemizde mevcut değil..")
        print("çevrilebilen kısım",yenicümle)
        quit()

print("Şifrelendi:",yenicümle)

