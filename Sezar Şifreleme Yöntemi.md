# Semih
Projem
k_alfabe = "1234567890abcçdefgğhıijklmnoöprsştuüvyzqwx -/{]#£><+}[$!_abc"
b_alfabe = "1234567890ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQWX ABC"

soru  = input("Şifrenizi giriniz:")
yeni_cümle = ""
for i in soru:
  if i in k_alfabe:
    indeks = k_alfabe.index[i]
    yeni_cümle += k_alfabe[indeks+3]
    
  elif i in b_alfabe:
    indeks = b_alfabe[i]
    yeni_cümle += b_alfabe[indeks +3]
    
   else:
      print("Bu harf alfabemizde mevcut değil..")
      
      print("Çevirilen kısım:"yeni_cümle)
print("Şifrelendi:"yeni_cümle)      
      
   
