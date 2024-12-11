Score : $700$ points

## Problem Statement

For strings $s$ and $t$, we will say that $s$ and $t$ are *prefix-free* when neither is a prefix of the other.

Let $L$ be a positive integer. A set of strings $S$ is a *good string set* when the following conditions hold true:

- Each string in $S$ has a length between $1$ and $L$ (inclusive) and consists of the characters `0` and `1`.
- Any two distinct strings in $S$ are prefix-free.

We have a good string set $S = \{ s_1, s_2, ..., s_N \}$. Alice and Bob will play a game against each other. They will alternately perform the following operation, starting from Alice:

- Add a new string to $S$. After addition, $S$ must still be a good string set.

The first player who becomes unable to perform the operation loses the game. Determine the winner of the game when both players play optimally.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq L \leq 10^{18}$
- $s_1$, $s_2$, ..., $s_N$ are all distinct.
- { $s_1$, $s_2$, ..., $s_N$ } is a good string set.
- $|s_1| + |s_2| + ... + |s_N| \leq 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$ $L$
> 
> $s_1$
> 
> $s_2$
> 
> $:$
> 
> $s_N$

## Output

If Alice will win, print `Alice`; if Bob will win, print `Bob`.

```input1
2 2
00
01
```

```output1
Alice
```

If Alice adds `1`, Bob will be unable to add a new string.

```input2
2 2
00
11
```

```output2
Bob
```

There are two strings that Alice can add on the first turn: `01` and `10`.
In case she adds `01`, if Bob add `10`, she will be unable to add a new string.
Also, in case she adds `10`, if Bob add `01`, she will be unable to add a new string.

```input3
3 3
0
10
110
```

```output3
Alice
```

If Alice adds `111`, Bob will be unable to add a new string.

```input4
2 1
0
1
```

```output4
Bob
```

Alice is unable to add a new string on the first turn.

```input5
1 2
11
```

```output5
Alice
```

```input6
2 3
101
11
```

```output6
Bob
```