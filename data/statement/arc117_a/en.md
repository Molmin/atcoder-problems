Score : $200$ points

## Problem Statement

A sequence of length $A + B$, $E = (E_1, E_2, \dots, E_{A+B})$, that satisfies all of the conditions below is said to be a *god* sequence.

- $E_1 + E_2 + \cdots + E_{A+B} = 0$ holds.
- There are exactly $A$ positive integers among $E_1, E_2, \dots, E_{A+B}$.
- There are exactly $B$ negative integers among $E_1, E_2, \dots, E_{A+B}$.
- $E_1, E_2, \dots, E_{A+B}$ are all distinct.
- $-10^{9} \leq E_i \leq 10^9, E_i \neq 0$ holds for every $i$ $(1 \leq i \leq A+B)$.

Construct one god sequence.

We can prove that at least one god sequence exists under Constraints of this problem.

## Constraints

- $1 \leq A \leq 1000$
- $1 \leq B \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the elements of your sequence in one line, with space as separator.

If there are multiple god sequences, any of them will be accepted.

> $E_1$ $E_2$ $\cdots$ $E_{A+B}$

```input1
1 1
```

```output1
1001 -1001
```

A sequence $(1001, -1001)$ contains $A=1$ positive integer and $B=1$ negative integer totaling $1001+(-1001)=0$.

It also satisfies the other conditions and thus is a god sequence.

```input2
1 4
```

```output2
-8 -6 -9 120 -97
```

A sequence $(-8, -6, -9, 120, -97)$ contains $A=1$ positive integer and $B=4$ negative integers totaling $(-8)+(-6)+(-9)+120+(-97)=0$.

It also satisfies the other conditions and thus is a god sequence.

```input3
7 5
```

```output3
323 -320 411 206 -259 298 -177 -564 167 392 -628 151
```