Score : $100$ points

## Problem Statement

We have $A$ balls with the string $S$ written on each of them and $B$ balls with the string $T$ written on each of them.<br>
From these balls, Takahashi chooses one with the string $U$ written on it and throws it away.<br>
Find the number of balls with the string $S$ and balls with the string $T$ that we have now.

## Constraints

- $S$, $T$, and $U$ are strings consisting of lowercase English letters.
- The lengths of $S$ and $T$ are each between $1$ and $10$ (inclusive).
- $S \not= T$
- $S=U$ or $T=U$.
- $1 \leq A,B \leq 10$
- $A$ and $B$ are integers.

## Input

Input is given from Standard Input in the following format:

> $S$ $T$
> 
> $A$ $B$
> 
> $U$

## Output

Print the answer, with space in between.

```input1
red blue
3 4
red
```

```output1
2 4
```

Takahashi chose a ball with `red` written on it and threw it away.
Now we have two balls with the string $S$ and four balls with the string $T$.

```input2
red blue
5 5
blue
```

```output2
5 4
```

Takahashi chose a ball with `blue` written on it and threw it away.
Now we have five balls with the string $S$ and four balls with the string $T$.