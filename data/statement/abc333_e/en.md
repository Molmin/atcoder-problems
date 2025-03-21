Score : $450$ points

## Problem Statement

Takahashi will embark on an adventure.

During the adventure, $N$ events will occur.
The $i$-th event $(1\leq i\leq N)$ is represented by a pair of integers $(t _ i,x _ i)$ $(1\leq t _ i\leq 2,1\leq x _ i\leq N)$ and is as follows:

- If $t _ i=1$, he finds one potion of type $x _ i$. He can choose to pick it up or discard it.
- If $t _ i=2$, he encounters one monster of type $x _ i$. If he has a potion of type $x _ i$, he can use one to defeat the monster. If he does not defeat it, he will be defeated.

Determine whether he can defeat all the monsters without being defeated.

If he cannot defeat all the monsters, print `-1`.

Otherwise, let $K$ be the maximum number of potions he has at some point during the adventure.
Let $K _ {\min}$ be the minimum value of $K$ across all strategies where he will not be defeated.
Print the value of $K _ {\min}$ and the actions of Takahashi that achieve $K _ {\min}$.

## Constraints

- $1\leq N\leq2\times10^5$
- $1\leq t _ i\leq2\ (1\leq i\leq N)$
- $1\leq x _ i\leq N\ (1\leq i\leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $t _ 1$ $x _ 1$
> 
> $t _ 2$ $x _ 2$
> 
> $\vdots$
> 
> $t _ N$ $x _ N$

## Output

If Takahashi cannot defeat all the monsters, print `-1`.
If he can, print the value of $K _ {\min}$ in the first line, and in the second line, for each $i$ such that $t _ i=1$ in ascending order, print `1` if he picks up the potion found at the $i$-th event, and `0` otherwise, separated by spaces.
If multiple sequences of actions achieve $K _ {\min}$ and allow him to finish the adventure without being defeated, you may print any of them.

```input1
13
1 2
1 3
1 1
1 3
1 2
2 3
1 3
1 3
2 3
1 3
2 2
2 3
2 1
```

```output1
3
1 1 1 0 0 1 0 1
```

The sample output corresponds to the following actions:

- Find potions of types $2,3,1$ in this order. Pick up all of them.
- Find potions of types $3,2$ in this order. Do not pick up any of them.
- Encounter a type-$3$ monster. Use one type-$3$ potion to defeat it.
- Find a type-$3$ potion. Pick it up.
- Find a type-$3$ potion. Do not pick it up.
- Encounter a type-$3$ monster. Use one type-$3$ potion to defeat it.
- Find a type-$3$ potion. Pick it up.
- Encounter a type-$2$ monster. Use one type-$2$ potion to defeat it.
- Encounter a type-$3$ monster. Use one type-$3$ potion to defeat it.
- Encounter a type-$1$ monster. Use one type-$1$ potion to defeat it.

In this sequence of actions, the value of $K$ is $3$.

There is no way to avoid defeat with $K\leq 2$, so the sought value of $K _ {\min}$ is $3$.
There are multiple sequences of actions that satisfy $K=3$ and allow him to avoid defeat; you may print any of them.

```input2
4
2 3
1 4
2 1
1 2
```

```output2
-1
```

He will inevitably be defeated by the first monster he encounters.

```input3
30
1 25
1 2
1 10
1 18
2 18
1 11
2 11
1 21
1 6
2 2
2 10
1 11
1 24
1 11
1 3
1 2
1 18
2 25
1 8
1 10
1 11
2 18
2 10
1 10
2 2
1 24
1 10
2 10
1 25
2 6
```

```output3
4
1 1 1 1 1 0 1 0 0 0 0 1 1 0 1 0 1 0 0 0
```