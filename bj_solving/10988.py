x = input()
reversed = ''
for i in x:
    reversed = i+reversed
if (reversed == x):
    print(1)
else:
    print(0)
