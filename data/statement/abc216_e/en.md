Score : $500$ points

## Problem Statement

Takahashi has come to an amusement park.<br>
The park has $N$ attractions. The *fun* of the $i$-th attraction is initially $a_i$.

When Takahashi rides the $i$-th attraction, the following sequence of events happens.

- Takahashi's *satisfaction* increases by the current fun of the $i$-th attraction.
- Then, the fun of the $i$-th attraction decreases by $1$.

Takahashi's satisfaction is initially $0$. He can ride the attractions at most $K$ times in total in any order.<br>
What is the maximum possible value of satisfaction Takahashi can end up with?

Other than riding the attractions, nothing affects Takahashi's satisfaction.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq K \leq 2 \times 10^9$
- $1 \leq A_i \leq 2 \times 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the maximum possible value of satisfaction that Takahashi can end up with.

```input1
3 5
100 50 102
```

```output1
502
```

Takahashi should ride the first attraction twice and the third attraction three times.<br>
He will end up with the satisfaction of $(100+99)+(102+101+100)=502$.<br>
There is no way to get the satisfaction of $503$ or more, so the answer is $502$.

```input2
2 2021
2 3
```

```output2
9
```

Takahashi may choose to ride the attractions fewer than $K$ times in total.