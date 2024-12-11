Score : $400$ points

## Problem Statement

You want to choose three persons from $N$ candidates to form a team.<br>
Each candidate has five parameters: power, speed, technique, knowledge, and inventiveness.<br>
The power, speed, technique, knowledge, and the inventiveness of the $i$-th candidate are $A_i$, $B_i$, $C_i$, $D_i$, and $E_i$, respectively.<br>
Let us define your team's power as the maximum of the members' powers. The team's speed, technique, knowledge, and inventiveness are defined similarly.<br>
Then, let us define your team's total strength as the minimum of the team's power, speed, technique, knowledge, and inventiveness.<br>
Find the maximum possible value of your team's total strength.

## Constraints

- All values in input are integers.
- $3 \leq N \leq 3000$
- $1 \leq A_i, B_i, C_i, D_i, E_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$ $C_1$ $D_1$ $E_1$
> 
> $A_2$ $B_2$ $C_2$ $D_2$ $E_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$ $C_N$ $D_N$ $E_N$

## Output

Print the answer.

```input1
3
3 9 6 4 6
6 9 3 1 1
8 8 9 3 7
```

```output1
4
```

We have no choice but to choose all three of them.<br>
Then, the team's parameters will be as follows:

- power: $\max(3, 6, 8) = 8$;
- speed: $\max(9, 9, 8) = 9$;
- technique: $\max(6, 3, 9) = 9$;
- knowledge: $\max(4, 1, 3) = 4$;
- inventiveness: $\max(6, 1, 7) = 7$.

Thus, the team's total strength will be $\min(8, 9, 9, 4, 7) = 4$.

```input2
5
6 13 6 19 11
4 4 12 11 18
20 7 19 2 5
15 5 12 20 7
8 7 6 18 5
```

```output2
13
```

If we choose the $1$-st, $2$-nd, and $3$-rd candidates, the team's total strength will be $\min(20, 13, 19, 19, 18) = 13$.

```input3
10
6 7 5 18 2
3 8 1 6 3
7 2 8 7 7
6 3 3 4 7
12 8 9 15 9
9 8 6 1 10
12 9 7 8 2
10 3 17 4 10
3 1 3 19 3
3 14 7 13 1
```

```output3
10
```