Score : $600$ points

## Problem Statement

The squirrel Chokudai has $N$ acorns.
One day, he decides to do some trades in multiple precious metal exchanges to make more acorns.

His plan is as follows:

1. Get out of the nest with $N$ acorns in his hands.
2. Go to Exchange $A$ and do some trades.
3. Go to Exchange $B$ and do some trades.
4. Go to Exchange $A$ and do some trades.
5. Go back to the nest.

In Exchange $X$ $(X = A, B)$, he can perform the following operations any integer number of times (possibly zero) in any order:

- Lose $g_{X}$ acorns and gain $1$ gram of gold.
- Gain $g_{X}$ acorns and lose $1$ gram of gold.
- Lose $s_{X}$ acorns and gain $1$ gram of silver.
- Gain $s_{X}$ acorns and lose $1$ gram of silver.
- Lose $b_{X}$ acorns and gain $1$ gram of bronze.
- Gain $b_{X}$ acorns and lose $1$ gram of bronze.

Naturally, he cannot perform an operation that would leave him with a negative amount of acorns, gold, silver, or bronze.

What is the maximum number of acorns that he can bring to the nest?
Note that gold, silver, or bronze brought to the nest would be worthless because he is just a squirrel.

## Constraints

- $1 \leq N \leq 5000$
- $1 \leq g_{X} \leq 5000$
- $1 \leq s_{X} \leq 5000$
- $1 \leq b_{X} \leq 5000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $g_A$ $s_A$ $b_A$
> 
> $g_B$ $s_B$ $b_B$

## Output

Print the maximum number of acorns that Chokudai can bring to the nest.

```input1
23
1 1 1
2 1 1
```

```output1
46
```

He can bring $46$ acorns to the nest, as follows:

- In Exchange $A$, trade $23$ acorns for $23$ grams of gold. {acorns, gold, silver, bronze}={ $0,23,0,0$ }
- In Exchange $B$, trade $23$ grams of gold for $46$ acorns. {acorns, gold, silver, bronze}={ $46,0,0,0$ }
- In Exchange $A$, trade nothing. {acorns, gold, silver, bronze}={ $46,0,0,0$ }

He cannot have $47$ or more acorns, so the answer is $46$.