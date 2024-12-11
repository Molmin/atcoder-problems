Score : $900$ points

## Problem Statement

Takahashi and Aoki are playing a stone-taking game. Initially, there are $N$ piles of stones, and the $i$-th pile contains $A_i$ stones and has an associated integer $K_i$.

Starting from Takahashi, Takahashi and Aoki take alternate turns to perform the following operation:

- Choose a pile. If the $i$-th pile is selected and there are $X$ stones left in the pile, remove some number of stones between $1$ and $floor(X/K_i)$ (inclusive) from the pile.

The player who first becomes unable to perform the operation loses the game. Assuming that both players play optimally, determine the winner of the game.
Here, $floor(x)$ represents the largest integer not greater than $x$.

## Constraints

- $1 \leq N \leq 200$
- $1 \leq A_i,K_i \leq 10^9$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $K_1$
> 
> $:$
> 
> $A_N$ $K_N$

## Output

If Takahashi will win, print `Takahashi`; if Aoki will win, print `Aoki`.

```input1
2
5 2
3 3
```

```output1
Aoki
```

Initially, from the first pile at most $floor(5/2)=2$ stones can be removed at a time, and from the second pile at most $floor(3/3)=1$ stone can be removed at a time.

- If Takahashi first takes two stones from the first pile, from the first pile at most $floor(3/2)=1$ stone can now be removed at a time, and from the second pile at most $floor(3/3)=1$ stone can be removed at a time.
- Then, if Aoki takes one stone from the second pile, from the first pile at most $floor(3/2)=1$ stone can be removed at a time, and from the second pile no more stones can be removed (since $floor(2/3)=0$).
- Then, if Takahashi takes one stone from the first pile, from the first pile at most $floor(2/2)=1$ stone can now be removed at a time, and from the second pile no more stones can be removed.
- Then, if Aoki takes one stone from the first pile, from the first pile at most $floor(1/2)=0$ stones can now be removed at a time, and from the second pile no more stones can be removed.

No more operation can be performed, thus Aoki wins. If Takahashi plays differently, Aoki can also win by play accordingly.

```input2
3
3 2
4 3
5 1
```

```output2
Takahashi
```

```input3
3
28 3
16 4
19 2
```

```output3
Aoki
```

```input4
4
3141 59
26535 897
93 23
8462 64
```

```output4
Takahashi
```