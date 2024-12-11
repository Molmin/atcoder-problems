Score: $200$ points

## Problem Statement

There are three positive integers $A$, $B$ and $C$ written on a blackboard. E869120 performs the following operation $K$ times:

- Choose one integer written on the blackboard and let the chosen integer be $n$. Replace the chosen integer with $2n$.

What is the largest possible sum of the integers written on the blackboard after $K$ operations?

## Constraints

- $A, B$ and $C$ are integers between $1$ and $50$ (inclusive).
- $K$ is an integer between $1$ and $10$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$
> 
> $K$

## Output

Print the largest possible sum of the integers written on the blackboard after $K$ operations by E869220.

```input1
5 3 11
1
```

```output1
30
```

In this sample, $5, 3, 11$ are initially written on the blackboard, and E869120 can perform the operation once.<br>
There are three choices:  

1. Double $5$: The integers written on the board after the operation are $10, 3, 11$.
2. Double $3$: The integers written on the board after the operation are $5, 6, 11$.
3. Double $11$: The integers written on the board after the operation are $5, 3, 22$.

If he chooses 3., the sum of the integers written on the board afterwards is $5 + 3 + 22 = 30$, which is the largest among 1. through 3.  

```input2
3 3 4
2
```

```output2
22
```

E869120 can perform the operation twice. The sum of the integers eventually written on the blackboard is maximized as follows:  

- First, double $4$. The integers written on the board are now $3, 3, 8$.
- Next, double $8$. The integers written on the board are now $3, 3, 16$.

Then, the sum of the integers eventually written on the blackboard is $3 + 3 + 16 = 22$.