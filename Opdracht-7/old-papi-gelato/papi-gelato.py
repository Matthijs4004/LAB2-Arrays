# papi-gelato 2
import math


print("Welkom bij Papi Gelato.")
sorry = "Sorry dat is geen optie die we aanbieden..."
hoorntje = "Hoorntjes    1 x € 1.25    = € 1.25  "
bakje = "Bakjes       1 x € 0.75    = € 0.75  "
x = ("                          -------- +")

def bon():
    sprPrijs = hoeveel*0.30
    bolPrijs = hoeveel*0.95
    print("\n----------[Papi Gelato]----------\n")
    print("Bolletjes   ",hoeveel,"x € 1.10    = €",round(bolPrijs, 2))
    if topping == "Geen" and houder == "hoorntje":
        print(hoorntje)
        print(x)
        print("Totaal                    = €",bolPrijs+1.25)
    if topping == "Geen" and houder == "bakje":
        print(bakje)
        print(x)
        print("Totaal                    = €",bolPrijs+0.75)
    if topping == "Slagroom" and houder == "bakje":
        print(bakje)
        print("Topping      1 x € 0.50    = € 0.50  ")
        print(x)
        print("Totaal                     = €",bolPrijs+0.50+0.75)
    elif topping == "Slagroom" and houder == "hoorntje":
        print(hoorntje)
        print("Topping      1 x € 0.50    = € 0.50  ")
        print(x)
        print("Totaal                     = €",bolPrijs+0.50+1.25)
    if topping == "Sprinkels" and houder == "hoorntje":
        print(hoorntje)
        print("Topping      1 x €",round(sprPrijs, 2),"    = €",round(sprPrijs, 2))
        print(x)
        print("Totaal                     = €",bolPrijs+sprPrijs+1.25)
    elif topping == "Sprinkels" and houder == "bakje":
        print(bakje)
        print("Topping      1 x €",round(sprPrijs, 2),"    = €",round(sprPrijs, 2))
        print(x)
        print("Totaal                     = €",bolPrijs+sprPrijs+0.75)
    if topping == "Caramel" and houder == "hoorntje":
        print(hoorntje)
        print("Topping      1 x € 0.60  = € 0.60")
        print(x)
        print("Totaal                    = €",(bolPrijs+0.60+1.25))
    elif topping == "Caramel" and houder == "bakje":
        print(bakje)
        print("Topping      1 x € 0.90    = € 0.90")
        print(x)
        print("Totaal                     = €",(bolPrijs+0.90+0.75))


def zakelijkbon():
    literPrijs = liter*9.80
    quotient = literPrijs / 100
    procent = quotient*6
    
    print("\n----------[Papi Gelato]----------\n")
    print("Liter     ",liter," x € 9.80    = €",round(literPrijs, 2))
    print(x)
    print("Totaal                    = €",round(literPrijs,2))
    print("BTW (6%)                  = €",round(procent, 2))

def start():
    print("\nBent u 1) particulier of 2) zakelijk?")
    markt = int(input("> "))
    if markt == 1:
        stap1()
    elif markt == 2:
        zakelijk1()
    else:
        print(sorry)
        return start()

def zakelijk1():
    global liter
    print("\nHoeveel liter ijs wilt u?")
    liter = int(input("> "))
    if liter > 1:
        zakelijk2()
    else:
        print(sorry)
        return zakelijk1

def zakelijk2():
    for x in range(liter, 0, -1):
        print("\nWelke smaak wilt u voor liter nummer",x,"? A) Aardbei, C) Chocolade of V) Vanille")
        smaakL = input("> ")
    if smaakL == "A" or smaakL == "C" or smaakL == "V":
        zakelijkbon()
    else:
        print(sorry)
        return zakelijk2()

def stap1():
    global hoeveel
    print("\nHoeveel bolletjes wilt u?")
    hoeveel = int(input("> "))
    if hoeveel in range(1,4):
        smaakKeuze()
    elif hoeveel in range(4,8):
        print("Dan krijgt u van mij een bakje met ",hoeveel," bolletjes")
        smaakKeuze()
    elif hoeveel > 8:
        print("Sorry, zulke grote bakken hebben we niet")
        return stap1()
    else:
        print(sorry)
        return stap1()


def smaakKeuze():
    for x in range(hoeveel, 0, -1):
        print("\nWelke smaak wilt u voor bolletje nummer",x,"? A) Aardbei, C) Chocolade of V) Vanille")
        smaak = input("> ")
    if smaak == "A" or smaak == "C"or smaak == "V":
        stap2()
    else:
        print(sorry)
        return smaakKeuze()


def stap2():
    global houder
    print("\nWilt u deze",hoeveel,"bolletje(s) in A) een hoorntje of B) een bakje?")
    houder = input("> ")
    if houder == "A":
        houder = "hoorntje"
        toppings()
    elif houder == "B":
        houder = "bakje"
        toppings()
    else:
        print(sorry)
        return stap2()


def toppings():
    global topping
    print("Wat voor topping wilt u: A) Geen, B) Slagroom, C) Sprinkels of D) Caramel Saus?")
    topping = input("> ")
    if topping == "A":
        topping == "Geen"
        stap3()
    elif topping == "B":
        topping = "Slagroom"
        stap3()
    elif topping == "C":
        topping = "Sprinkels"
        stap3()
    elif topping == "D":
        topping = "Caramel"
        stap3()
    else:
        print(sorry)


def stap3():
    print("\nHier is uw",houder,"met",hoeveel,"bolletje(s). Wilt u nog meer bestellen? Y/N")
    nogmaals = input("> ")
    if nogmaals == "Y":
        stap1()
    elif nogmaals == "N":
        bon()
        print("Bedankt en tot ziens!")
    else:
        print(sorry)

start()