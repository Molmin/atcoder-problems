Score : $300$ points

## Problem Statement

There is a $10^9$-story building with $N$ ladders.<br>
Takahashi, who is on the $1$-st (lowest) floor, wants to reach the highest floor possible by using ladders (possibly none).<br>
The ladders are numbered from $1$ to $N$, and ladder $i$ connects the $A_i$-th and $B_i$-th floors. One can use ladder $i$ in either direction to move from the $A_i$-th floor to the $B_i$-th floor or vice versa, but not between other floors.<br>
Takahashi can freely move within the same floor, but cannot move between floors without using ladders.<br>
What is the highest floor Takahashi can reach?

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq 10^9$
- $A_i \neq B_i$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\ldots$
> 
> $A_N$ $B_N$

## Output

Print an integer representing the answer.

```input1
4
1 4
4 3
4 10
8 3
```

```output1
10
```

He can reach the $10$-th floor by using ladder $1$ to get to the $4$-th floor and then ladder $3$ to get to the $10$-th floor.

```input2
6
1 3
1 5
1 12
3 5
3 12
5 12
```

```output2
12
```

```input3
3
500000000 600000000
600000000 700000000
700000000 800000000
```

```output3
1
```

He may be unable to move between floors.