Score : $300$ points

## Problem Statement

We have $N$ clocks. The hand of the $i$-th clock $(1 \leq i \leq N)$ rotates through $360^\circ$ in exactly $T_i$ seconds.<br>
Initially, the hand of every clock stands still, pointing directly upward.<br>
Now, Dolphin starts all the clocks simultaneously.<br>
In how many seconds will the hand of every clock point directly upward again?

## Constraints

- $1 \leq N \leq 100$
- $1 \leq T_i \leq 10^{18}$
- All input values are integers.
- The correct answer is at most $10^{18}$ seconds.

## Input

Input is given from Standard Input in the following format:  

> $N$
> 
> $T_1$
> 
> $:$  
> 
> $T_N$

## Output

Print the number of seconds after which the hand of every clock point directly upward again.

```input1
2
2
3
```

```output1
6
```

We have two clocks. The time when the hand of each clock points upward is as follows:

- Clock $1$: $2$, $4$, $6$, $...$ seconds after the beginning
- Clock $2$: $3$, $6$, $9$, $...$ seconds after the beginning

Therefore, it takes $6$ seconds until the hands of both clocks point directly upward.

```input2
5
2
5
10
1000000000000000000
1000000000000000000
```

```output2
1000000000000000000
```