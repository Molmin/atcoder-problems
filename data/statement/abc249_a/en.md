Score : $100$ points

## Problem Statement

Takahashi and Aoki decided to jog.<br>
Takahashi repeats the following: "walk at $B$ meters a second for $A$ seconds and take a rest for $C$ seconds."<br>
Aoki repeats the following: "walk at $E$ meters a second for $D$ seconds and take a rest for $F$ seconds."<br>
When $X$ seconds have passed since they simultaneously started to jog, which of Takahashi and Aoki goes ahead?

## Constraints

- $1 \leq A, B, C, D, E, F, X \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$ $E$ $F$ $X$

## Output

When $X$ seconds have passed since they simultaneously started to jog, if Takahashi goes ahead of Aoki, print `Takahashi`; if Aoki goes ahead of Takahashi, print `Aoki`; if they have advanced the same distance, print `Draw`.

```input1
4 3 3 6 2 5 10
```

```output1
Takahashi
```

During the first $10$ seconds after they started to jog, they move as follows.

- Takahashi walks for $4$ seconds, takes a rest for $3$ seconds, and walks again for $3$ seconds.  As a result, he advances a total of $(4 + 3) \times 3 = 21$ meters.
- Aoki walks for $6$ seconds and takes a rest for $4$ seconds.  As a result, he advances a total of $6 \times 2 = 12$ meters.

Since Takahashi goes ahead, `Takahashi` should be printed.

```input2
3 1 4 1 5 9 2
```

```output2
Aoki
```

```input3
1 1 1 1 1 1 1
```

```output3
Draw
```