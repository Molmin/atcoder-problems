Score : $400$ points

## Problem Statement

AtCoder cafeteria offers $N$ main dishes and $M$ side dishes. The price of the $i$-th main dish is $A_i$, and that of the $j$-th side dish is $B_j$.
The cafeteria is considering introducing a new set meal menu.
A set meal consists of one main dish and one side dish. Let $s$ be the sum of the prices of the main dish and the side dish, then the price of the set meal is $\min(s,P)$.
Here, $P$ is a constant given in the input.

There are $NM$ ways to choose a main dish and a side dish for a set meal. Find the total price of all these set meals.

## Constraints

- $1\leq N,M \leq 2\times 10^5$
- $1\leq A_i,B_j \leq 10^8$
- $1\leq P \leq 2\times 10^8$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $P$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_M$

## Output

Print the answer as an integer.
Under the constraints of this problem, it can be proved that the answer fits into a $64$-bit signed integer.

```input1
2 2 7
3 5
6 1
```

```output1
24
```

- If you choose the first main dish and the first side dish, the price of the set meal is $\min(3+6,7)=7$.
- If you choose the first main dish and the second side dish, the price of the set meal is $\min(3+1,7)=4$.
- If you choose the second main dish and the first side dish, the price of the set meal is $\min(5+6,7)=7$.
- If you choose the second main dish and the second side dish, the price of the set meal is $\min(5+1,7)=6$.

Thus, the answer is $7+4+7+6=24$.

```input2
1 3 2
1
1 1 1
```

```output2
6
```

```input3
7 12 25514963
2436426 24979445 61648772 23690081 33933447 76190629 62703497
11047202 71407775 28894325 31963982 22804784 50968417 30302156 82631932 61735902 80895728 23078537 7723857
```

```output3
2115597124
```