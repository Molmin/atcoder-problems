Score : $200$ points

## Problem Statement

Takahashi wants to buy the popular video game console called Play Snuke.<br>
There are $N$ shops that sell Play Snuke: Shop $1, 2, \dots, N$. Shop $i$ is $A_i$ minutes' walk from where Takahashi is now, sells Play Snuke for $P_i$ yen (Japanese currency), and currently has $X_i$ Play Snukes in stock.<br>
Now, Takahashi will go to one of those shops on foot and buy Play Snuke if it is still in stock when he gets there.<br>
However, Play Snuke is so popular that the number of consoles in stock (if any) in every shop will decrease by $1$ at the following moments: $0.5, 1.5, 2.5, \dots$ minutes from now.<br>
Determine whether Takahashi can buy Play Snuke. If he can, find the minimum amount of money needed to buy one.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $1 \leq A_i, P_i, X_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $P_1$ $X_1$
> 
> $\vdots$
> 
> $A_N$ $P_N$ $X_N$

## Output

If Takahashi can buy Play Snuke, print the minimum amount of money needed to buy one, as an integer.<br>
If he cannot buy one, print `-1`.

```input1
3
3 9 5
4 8 5
5 7 5
```

```output1
8
```

If he goes to Shop $1$, it will still have $2$ Play Snukes when he gets there, and he can buy one for $9$ yen.<br>
If he goes to Shop $2$, it will still have $1$ Play Snuke when he gets there, and he can buy one for $8$ yen.<br>
If he goes to Shop $3$, Play Snuke will be out of stock when he gets there; he cannot buy one.

```input2
3
5 9 5
6 8 5
7 7 5
```

```output2
-1
```

```input3
10
158260522 877914575 602436426
24979445 861648772 623690081
433933447 476190629 262703497
211047202 971407775 628894325
731963982 822804784 450968417
430302156 982631932 161735902
880895728 923078537 707723857
189330739 910286918 802329211
404539679 303238506 317063340
492686568 773361868 125660016
```

```output3
861648772
```