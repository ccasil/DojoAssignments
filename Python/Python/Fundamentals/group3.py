'''
def number1():
    greeting = "hello"
    name = "dojo"
    print name + greeting

number1()
'''
'''
def number2(li):
    for i in li:
        print i

number2(["wish", "mop", "bleet", "march", "jerk"])
'''
'''
def number3(num):
    li =[]
    for i in range(0,25):
        num*=2
        li.append(num)
    print li

number3(2)
'''
'''
def number4(string):
    blank=""
    for i in range(len(string)-1,-1,-1):
        blank+=string[i]
    print blank

number4("hello")
'''

def number5():
    x=10
    x=x*7   #70
    y=30
    z=y+x   #100
    z=z*3   #300
    z=z-y   #270
    z=z/27  #10
    x=z+y   #40
    y=3
    x=x+y   #43
    if x%10==0:
        print "true"
        return True
    else:
        print "false"
        return False

number5()


cesarkylecasil@gmail.com
ryoung1993@yahoo.com