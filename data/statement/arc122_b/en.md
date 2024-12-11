Score : $500$ points

## Problem Statement

Snuke has read his own fortune for tomorrow, and learned that there are $N$ scenarios that can happen, one of which will happen tomorrow with equal probability. The $i$-th scenario will cost him $A_i$ yen (Japanese currency).

Following this, Snuke has decided to get insurance today.
If he pays $x$ yen to his insurance company, he will get compensation of $\min(A_i,2x)$ yen when $A_i$ yen is lost.
Here, he can choose any non-negative **real number** as $x$.

Snuke wants to minimize the expected value of the amount of money he loses, which is $x+A_i-\min(A_i,2x)$.
Find the minimized value.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.
Your answer will be judged correct when its absolute or relative error is at most $10^{-6}$.

```input1
3
3 1 4
```

```output1
1.83333333333333333333
```

The optimum choice is $x=1.5$.
After paying $1.5$ yen, one of the following three scenarios will happen with equal probability:

- <p>Scenario $1$: Lose $3$ yen and get compensation of $\min(3,2x)=3$ yen. After all, Snuke loses $x+A_1-\min(A_1,2x)=1.5+3-3=1.5$ yen.</p>
- <p>Scenario $2$: Lose $1$ yen and get compensation of $\min(1,2x)=1$ yen. After all, Snuke loses $x+A_2-\min(A_2,2x)=1.5+1-1=1.5$ yen.</p>
- <p>Scenario $3$: Lose $4$ yen and get compensation of $\min(4,2x)=3$ yen. After all, Snuke loses $x+A_3-\min(A_3,2x)=1.5+4-3=2.5$ yen.</p>

Thus, the expected amount of money lost is $(1.5+1.5+2.5)/3=1.833333\cdots$ yen.

```input2
10
866111664 178537096 844917655 218662351 383133839 231371336 353498483 865935868 472381277 579910117
```

```output2
362925658.10000000000000000000
```